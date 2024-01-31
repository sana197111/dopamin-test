import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { question as quiz } from '../contents/question';
import { score } from '../contents/score'; // score 배열을 가져옵니다.

const Test = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [curQuiz, setQuiz] = useState({});
    const [nextId, setNextId] = useState(0);

    useEffect(() => {
        const num = parseInt(id, 10);
        if (quiz && quiz.length > num - 1) {
            setQuiz(quiz[num - 1]);
            setNextId(num + 1);
        }
    }, [id]);

    useEffect(() => {
        quiz.forEach(question => {
            const img = new Image();
            img.src = question.image;
        });
    }, []);
    
    useEffect(() => {
        // 현재 포커스된 요소의 포커스를 제거하여 어떠한 요소도 자동으로 포커스되지 않도록 합니다.
        if (document.activeElement) {
            document.activeElement.blur();
        }
    }, [curQuiz]); // curQuiz가 변경될 때마다 실행

    const getScore = (arr) => {
        let idx = 0;
        arr.forEach((item) => {
            score[0][idx] += item;
            if (score[0][idx] > score[1].maxScore) {
                score[1].maxScore = score[0][idx];
                score[1].maxIdx = idx;
            }
            idx++;
        });
    };

    const handleAnswerClick = (weight) => {
        getScore(weight); // 사용자의 점수를 업데이트합니다.

        if (nextId > quiz.length) { // 마지막 질문인 경우
            navigate(`/result/${score[1].maxIdx + 1}`); // 결과 페이지로 리다이렉트합니다.
        } else {
            navigate(`/test/${nextId}`); // 다음 질문으로 이동합니다.
        }
    };

    return (
        <div className="min-h-screen overflow-y-auto font-lab-digital p-4 flex flex-col items-center justify-center bg-black background-gif">
            {id && parseInt(id, 7) < 7 && (
                <div style={{
                        borderRadius: '5px',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        padding: '60px 40px 40px 40px',
                        maxWidth: '700px',
                        textAlign: 'center',
                        margin: 'auto'
                    }}>
                    <h2 className="mb-6 mt-8 text-center font-DNFBitBitv2 text-5xl" style={{
                        background: "linear-gradient(#75BF42, #A3CC40)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                        Q.{id}
                    </h2>
                    <h3 className="mb-6 text-center text-3xl" style={{color: "#A3CC40"}}>
                        <span dangerouslySetInnerHTML={{ __html: curQuiz.title }}></span>
                    </h3>
                    <img src={curQuiz.image} alt={curQuiz.title} style={{width: '100%', height: 'auto', display: 'block', margin: 'auto'}} />
                    <br />
                    {curQuiz.content && curQuiz.content.map((item, index) => (
                        <button 
                            key={index} 
                            className="button-active mt-6 mb-3 px-2 py-3 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out w-full"
                            onClick={() => handleAnswerClick(item.weight)} // 여기에 함수를 연결합니다.
                        >
                            {item.answer}
                        </button>
                    ))}
                    <button onClick={() => navigate(-1)} 
                        className="font-DNFBitBitv2 button mt-5 px-4 py-2 border rounded" 
                        style={{background: "linear-gradient(#75BF42, #A3CC40)", 
                                width: "fit-content", 
                                color: "white",
                                hover: {backgroundColor: "#92b837"}, 
                                active: {backgroundColor: "#819d34"}}}>
                        뒤로
                    </button>
                </div>
            )}
        </div>
    );
}

export { Test };
