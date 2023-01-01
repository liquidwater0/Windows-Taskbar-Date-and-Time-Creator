import React, { useState } from 'react';

export default function DateAndTime({ theme, os, size }) {
    const [time, setTime] = useState("12:00 AM");
    const [date, setDate] = useState("1/1/2000");

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