"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

type CountdownTimerProps = {
    initialMinutes: number;
    initialSeconds?: number;
};

const pad = (num: number) => String(num).padStart(2, "0");

export default function CountdownTimer({
    initialMinutes,
    initialSeconds = 0,
}: CountdownTimerProps) {
    const initialTime = initialMinutes * 60 + initialSeconds;
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // カウントダウンロジック
    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            intervalRef.current = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isRunning]);

    // タイマーが0になったら停止
    useEffect(() => {
        if (timeLeft === 0 && isRunning) {
            setIsRunning(false);
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
    }, [timeLeft, isRunning]);

    // リセット処理
    const handleReset = () => {
        setIsRunning(false);
        setTimeLeft(initialTime);
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="text-5xl md:text-7xl font-mono font-bold tracking-widest select-none">
                {pad(minutes)}:{pad(seconds)}
            </div>
            <div className="flex gap-4">
                <Button
                    onClick={() => setIsRunning((prev) => !prev)}
                    variant={isRunning ? "secondary" : "default"}
                >
                    {isRunning ? "一時停止" : "開始"}
                </Button>
                <Button onClick={handleReset} variant="outline">
                    リセット
                </Button>
            </div>
        </div>
    );
} 