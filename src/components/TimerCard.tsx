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

    const handleStart = () => {
        if (minutes > 0 || seconds > 0) {
            setIsTimerStarted(true);
        }
    };

    const handleReset = () => {
        setIsTimerStarted(false);
        setMinutes(0);
        setSeconds(0);
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
                            initialMinutes={minutes}
                            initialSeconds={seconds}
                        />
                        <div className="flex justify-center">
                            <Button
                                onClick={handleReset}
                                className="w-24"
                                variant="secondary"
                            >
                                時間の再設定
                            </Button>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
} 