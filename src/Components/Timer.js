import React, { useEffect, useState } from "react";

const Timer = ({ submitHandler }) => {
    const [timeLeft, setTimeLeft] = useState(120);
    // useEffect called everytime timer changes
    useEffect(() => {
        // timer decreases by 1 every second
        setInterval(() => {
            if (timeLeft === 0) {
                submitHandler();
            }
            setTimeLeft(timeLeft - 1);
        }, 1000);
    }, [timeLeft]);

    return (
        <div className="justify-center  p-2 m-2  text-center h-full  rounded-full shadow-lg bg-green-300 font-semibold">
            Time: {timeLeft} sec
        </div>
    );
};

export default Timer;
