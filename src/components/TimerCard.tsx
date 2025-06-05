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
                        <Button onClick={handleStart} className="w-full">
                            開始
                        </Button>
                    </div>
                ) : (
                    <>
                        <CountdownTimer initialMinutes={minutes} initialSeconds={seconds} />
                        <Button onClick={handleReset} variant="outline" className="w-full">
                            リセット
                        </Button>
                    </>
                )}
            </CardContent>
        </Card>
    );
} 