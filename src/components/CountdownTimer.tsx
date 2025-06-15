"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

type CountdownTimerProps = {
    initialMinutes: number;
    initialSeconds?: number;
    isPaused: boolean;
    onTimeUpdate?: (timeLeft: number) => void;
};

const pad = (num: number) => String(num).padStart(2, "0");

export default function CountdownTimer({
    initialMinutes,
    initialSeconds = 0,
    isPaused,
    onTimeUpdate,
}: CountdownTimerProps) {
    const initialTime = initialMinutes * 60 + initialSeconds;
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // 入力値が変更されたときにタイマーを更新
    useEffect(() => {
        if (!isPaused) {
            setTimeLeft(initialTime);
        }
    }, [initialTime, isPaused]);

    // カウントダウンロジック
    useEffect(() => {
        if (!isPaused && timeLeft > 0) {
            intervalRef.current = setInterval(() => {
                setTimeLeft((prev) => {
                    const newTime = prev - 1;
                    onTimeUpdate?.(newTime);
                    return newTime;
                });
            }, 1000);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPaused, timeLeft, onTimeUpdate]);

    // タイマーが0になったら停止
    useEffect(() => {
        if (timeLeft === 0 && !isPaused) {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
    }, [timeLeft, isPaused]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="text-5xl md:text-7xl font-mono font-bold tracking-widest select-none">
                {pad(minutes)}:{pad(seconds)}
            </div>
        </div>
    );
} 