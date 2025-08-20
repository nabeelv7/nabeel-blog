"use client";

import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);

    return (
        <div>
            <button onClick={increment} className="btn">{count} <ArrowLeft size={16} /> Increment</button>
        </div>
    )
}