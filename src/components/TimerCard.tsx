"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CountdownTimer from "./CountdownTimer";

export default function TimerCard() {
    return (
        <Card className="w-full max-w-md shadow-lg">
            <CardHeader>
                <CardTitle className="text-center text-2xl">カウントダウンタイマー</CardTitle>
            </CardHeader>
            <CardContent>
                <CountdownTimer initialMinutes={0} initialSeconds={5} />
            </CardContent>
        </Card>
    );
} 