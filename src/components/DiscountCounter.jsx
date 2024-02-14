"use client";
import { useState, useEffect } from "react";

const DiscountCounter = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0", " : "),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0",
          " : "
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(
          2,
          "0",
          " : "
        ),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span className="flex flex-col gap-2 capitalize" key={interval}>
        <span className="pl-6 text-xs">{interval}</span>

        <span className="ml-6 text-2xl font-bold">
          {interval === "days" ? " " : ": "} {timeLeft[interval]}
        </span>
      </span>
    );
  });

  return (
    <div className="flex justify-center space-x-2">
      {timerComponents.length ? timerComponents : <span>Discount expired</span>}
    </div>
  );
};

export default DiscountCounter;
