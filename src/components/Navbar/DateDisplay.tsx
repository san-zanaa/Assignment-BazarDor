"use client";

import { useEffect, useState } from "react";

const DateDisplay = () => {
    const [date, setDate] = useState("");

    useEffect(() => {
        setDate(
            new Date().toLocaleDateString("bn-BD", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "Asia/Dhaka",
            })
        );
    }, []);

    return <>{date}</>;
};

export default DateDisplay;
