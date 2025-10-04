"use client";

import React, { useState } from "react";
import { Button } from "./button";

interface CounterProps {
  initial?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({ initial = 1, min = 1, max = 99, onChange }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < max) {
      const newCount = count + 1;
      setCount(newCount);
      onChange?.(newCount);
    }
  };

  const decrement = () => {
    if (count > min) {
      const newCount = count - 1;
      setCount(newCount);
      onChange?.(newCount);
    }
  };

  return (
    <div className="flex items-center border rounded-md overflow-hidden">
      <Button
        variant="ghost"
        className="px-3 py-1 rounded-none hover:bg-white"
        onClick={decrement}
      >
        -
      </Button>
      <span className="px-4 py-1">{count}</span>
      <Button
        variant="ghost"
        className="px-3 py-1 rounded-none hover:bg-white"
        onClick={increment}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
