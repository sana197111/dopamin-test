import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Opening() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/main");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="min-h-screen overflow-y-auto font-lab-digital max-h-screen p-4 flex flex-col items-center justify-center bg-black">
            <img
                src="/opening.gif" 
                alt="Opening animation"
                className="w-96 h-96" // 400x400 크기를 Tailwind 클래스로 표현
            />
        </div>
    );
}

export { Opening };
