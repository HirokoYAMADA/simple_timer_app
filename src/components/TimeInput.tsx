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
            <div className="relative">
                <input
                    id="minutes"
                    type="number"
                    min="0"
                    max="59"
                    value={minutes}
                    onChange={(e) => onMinutesChange(Number(e.target.value))}
                    className="w-24 px-3 py-2 border rounded-md pr-8"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">分</span>
            </div>
            <div className="relative">
                <input
                    id="seconds"
                    type="number"
                    min="0"
                    max="59"
                    value={seconds}
                    onChange={(e) => onSecondsChange(Number(e.target.value))}
                    className="w-24 px-3 py-2 border rounded-md pr-8"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">秒</span>
            </div>
        </div>
    );
} 