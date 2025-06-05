"use client";

type TimeInputProps = {
    minutes: number;
    seconds: number;
    onMinutesChange: (value: number) => void;
    onSecondsChange: (value: number) => void;
};

export default function TimeInput({
    minutes,
    seconds,
    onMinutesChange,
    onSecondsChange,
}: TimeInputProps) {
    return (
        <div className="flex gap-4 items-center justify-center">
            <div className="flex flex-col gap-2">
                <label htmlFor="minutes" className="text-sm font-medium">
                    分
                </label>
                <input
                    id="minutes"
                    type="number"
                    min="0"
                    max="59"
                    value={minutes}
                    onChange={(e) => onMinutesChange(Number(e.target.value))}
                    className="w-20 px-3 py-2 border rounded-md"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="seconds" className="text-sm font-medium">
                    秒
                </label>
                <input
                    id="seconds"
                    type="number"
                    min="0"
                    max="59"
                    value={seconds}
                    onChange={(e) => onSecondsChange(Number(e.target.value))}
                    className="w-20 px-3 py-2 border rounded-md"
                />
            </div>
        </div>
    );
} 