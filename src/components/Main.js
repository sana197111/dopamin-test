import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

function Main() {
    const fullText = "내 안의 혈중<br/>독파민 농도 테스트";
    const [text, setText] = useState('');
    const [typingComplete, setTypingComplete] = useState(false);

    useEffect(() => {
        if (!typingComplete) {
          if (text.length < fullText.length) {
            setTimeout(() => {
              setText(fullText.slice(0, text.length + 1));
            }, 100);
          } else {
            setTypingComplete(true);
          }
        }
    }, [text, typingComplete]);

    return (
                <div className="min-h-screen overflow-y-auto font-lab-digital max-h-screen p-4 flex flex-col items-center justify-center bg-black background-gif">
                    <div style={{
                        borderRadius: '5px',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        padding: '40px',
                        maxWidth: '700px',
                        textAlign: 'center',
                        margin: 'auto'
                    }}>
                        <h1 className="mb-10 text-center font-DNFBitBitv2 text-5xl" style={{
                            background: "linear-gradient(#75BF42, #A3CC40)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            도파민 테스트<br/>
                        </h1>
                        <h3 className="mb-8 text-center text-4xl" style={{color: "#A3CC40"}}>
                            <span dangerouslySetInnerHTML={{__html: text}}></span>
                            {typingComplete && <span className="blinking-cursor">|</span>}
                        </h3>
                        <p className="text-center mb-4" style={{color: "#A3CC40"}}>
                            묵묵한 페이지
                        </p>
                        <Link to="/shorts">
                            <button className="button-active mt-8 mb-8 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out">
                                테스트 시작하기
                            </button>
                        </Link>
                    </div>        
                </div>
            )
}

export { Main };