import { useState, useEffect } from "react";

interface CountdownProps {
    endDate: string;
}

export const FlashSaleCountdown = ({ endDate }: CountdownProps) => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = new Date(endDate).getTime() - now;

            if (distance < 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [endDate]);

    return (
        <div className="flex items-center gap-4 bg-red-600 text-white px-6 py-3 rounded-sm shadow-xl animate-pulse">
            <span className="text-xs uppercase tracking-[0.2em] font-bold">Outlet Expiring:</span>
            <div className="flex gap-3 text-lg font-mono font-bold">
                <div className="flex flex-col items-center">
                    <span>{String(timeLeft.hours).padStart(2, "0")}</span>
                    <span className="text-[8px] uppercase tracking-tighter opacity-70">Hrs</span>
                </div>
                <span>:</span>
                <div className="flex flex-col items-center">
                    <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
                    <span className="text-[8px] uppercase tracking-tighter opacity-70">Min</span>
                </div>
                <span>:</span>
                <div className="flex flex-col items-center">
                    <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
                    <span className="text-[8px] uppercase tracking-tighter opacity-70">Sec</span>
                </div>
            </div>
        </div>
    );
};
