import { useState } from 'react';
import "./Heart.css";
import Confetti from 'react-confetti-boom';

const colors = ["#FEF2F4", "#FCC8D1", "#FFABAB", "#D14D72"];

export default function Heart() {
    const [i, setI] = useState(0);
    const [state, setState] = useState("idle");
    const handleClick = () => {
        if(state === "explode") {
            return;
        }

        if(i >= colors.length - 1)
        {
            setTimeout(() => {
                setState("idle")
                setI(0);
            }, 3000);
            setState("explode");
            return;
        }

        setState("beat");
        setTimeout(() => setI((prev) => prev + 1), 400);
        setTimeout(() => setState("idle"), 400);
    };

    return (
        <>
            {state === "explode" && <Confetti className="particle" mode="boom" shapeSize={15} y={0.5} particleCount={1000} colors={['#ff577f', '#ff884b']}/>}
            <div className={`heart ${state}`} style={{"--color":colors[Math.min(i, colors.length - 1)]}} onClick={handleClick}/>
        </>
    )
}
