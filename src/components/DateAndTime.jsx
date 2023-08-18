import React, { useState } from 'react';

export default function DateAndTime({ theme, os, size }) {
    const [time, setTime] = useState(() => {
        const now = new Date();
        const hour = now.getHours() % 12;
        const hourFormatted = hour === 0 ? 12 : hour;
        const minute = now.getMinutes().toString().padStart(2, "0");
        const amPm = now.getHours() >= 12 ? "PM" : "AM";

        return `${hourFormatted}:${minute} ${amPm}`;
    });
    const [date, setDate] = useState(() => {
        const now = new Date();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const year = now.getFullYear();

        return `${month}/${day}/${year}`;
    });

    return (
        <div className='date-and-time' data-theme={theme} data-os={os} data-size={size}>
            <input 
                type="text" 
                value={time}
                onChange={({ target }) => setTime(target.value)}
            />
            <input 
                type="text"
                value={date}
                onChange={({ target }) => setDate(target.value)}
            />
        </div>
    );
}