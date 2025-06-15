"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
import TimeInput from "./TimeInput";

export default function TimerCard() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isTimerStarted, setIsTimerStarted] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [remainingTime, setRemainingTime] = useState(0);

    const handleStart = () => {
        if (minutes > 0 || seconds > 0) {
            setIsTimerStarted(true);
            setIsPaused(false);
            setRemainingTime(minutes * 60 + seconds);
        }
    };

    const handlePause = () => {
        setIsPaused(true);
    };

    const handleResume = () => {
        setIsPaused(false);
    };

    const handleReset = () => {
        setIsTimerStarted(false);
        setIsPaused(false);
        setMinutes(0);
        setSeconds(0);
        setRemainingTime(0);
    };

    const handleTimeUpdate = (newTimeLeft: number) => {
        setRemainingTime(newTimeLeft);
    };

    return (
        <Card className="w-full max-w-md shadow-lg">
            <CardHeader>
                <CardTitle className="text-center text-2xl">カウントダウンタイマー</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {!isTimerStarted ? (
                    <div className="flex flex-col gap-4">
                        <TimeInput
                            minutes={minutes}
                            seconds={seconds}
                            onMinutesChange={setMinutes}
                            onSecondsChange={setSeconds}
                        />
                        <div className="flex justify-center">
                            <Button
                                onClick={handleStart}
                                className="w-24"
                                disabled={minutes === 0 && seconds === 0}
                            >
                                開始
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        <CountdownTimer
                            initialMinutes={Math.floor(remainingTime / 60)}
                            initialSeconds={remainingTime % 60}
                            isPaused={isPaused}
                            onTimeUpdate={handleTimeUpdate}
                        />
                        <div className="flex justify-center gap-4">
                            {isPaused ? (
                                <Button
                                    onClick={handleResume}
                                    className="w-24"
                                    variant="default"
                                >
                                    再開
                                </Button>
                            ) : (
                                <Button
                                    onClick={handlePause}
                                    className="w-24"
                                    variant="secondary"
                                >
                                    一時停止
                                </Button>
                            )}
                            <Button
                                onClick={handleReset}
                                className="w-24"
                                variant="outline"
                            >
                                リセット
                            </Button>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
} 