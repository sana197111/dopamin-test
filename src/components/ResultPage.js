import React from 'react';
import { useParams } from 'react-router-dom';
import { result } from '../contents/results'; // result.js에서 결과 데이터를 가져옵니다.

function ResultPage() {
    const { id } = useParams(); // URL에서 결과 유형 ID를 가져옵니다.
    const resultIndex = parseInt(id, 10) - 1; // 배열 인덱스는 0부터 시작하므로 1을 빼줍니다.
    const resultData = result[resultIndex]; // 해당 ID에 해당하는 결과 데이터를 가져옵니다.

    return (
        <div className="min-h-screen overflow-y-auto font-lab-digital max-h-screen p-4 flex flex-col items-center justify-center bg-black background-gif">
            {resultData && ( // resultData가 존재하는 경우에만 렌더링합니다.
                <div style={{
                    borderRadius: '5px',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    padding: '40px',
                    maxWidth: '700px',
                    textAlign: 'center',
                    margin: '20px 0',
                    marginTop: '100px'
                }}>
                    <h2 className="font-DNFBitBitv2 text-3xl mb-6" style={{color: "#75BF42"}}>{resultData.name}</h2>
                    <h1 className="font-DNFBitBitv2 text-5xl mb-6" style={{color: "#ffffff"}}>{resultData.dopamineLevel}</h1>
                    <h3 className="font-DNFBitBitv2 text-xl mb-2" style={{color: "#A3CC40"}}>{resultData.nickname}</h3>
                    <p className="mb-8" style={{color: "#fff0f0"}}>{resultData.description}</p>
                    <p className="mb-2 font-DNFBitBitv2 text-xl" style={{color: "#A3CC40"}}>현재 나의 모습은?</p>
                    <p className="mb-8" style={{color: "#fff0f0"}}>{resultData.currentSituation}</p>
                    <p className="mb-2 font-DNFBitBitv2 text-xl" style={{color: "#A3CC40"}}>도파민과 친해지려면?</p>
                    <p className="mb-4" style={{color: "#fff0f0"}}>{resultData.gettingCloser}</p>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", // 가로 방향으로 중앙 정렬
                        justifyContent: "center", // 세로 방향으로 중앙 정렬
                        width: "100%", // 컨테이너의 너비를 100%로 설정
                        height: "28vh", // 컨테이너의 높이를 화면 높이와 동일하게 설정
                    }}>
                        <button onClick={() => window.location.href = "/"} 
                            className="font-DNFBitBitv2 button mt-5 px-4 py-2 border rounded" 
                            style={{
                                background: "linear-gradient(#75BF42, #A3CC40)", 
                                width: "200px", // 버튼의 너비를 고정값으로 설정
                                color: "white",
                                marginBottom: "5px"
                            }}>
                            테스트 다시하기
                        </button>
                        <button onClick={() => window.location.href = "https://forms.gle/bATvfp2nR8iXYh7z6"} 
                            className="font-DNFBitBitv2 button mt-5 px-4 py-2 border rounded" 
                            style={{
                                background: "linear-gradient(#75BF42, #A3CC40)", 
                                width: "200px", // 버튼의 너비를 고정값으로 설정
                                color: "white",
                                marginBottom: "5px"
                            }}>
                            팝업스토어 신청하기
                        </button>
                        <button onClick={() => window.location.href = "https://mookmookpage.site/"} 
                            className="font-DNFBitBitv2 button mt-5 px-4 py-2 border rounded" 
                            style={{
                                background: "linear-gradient(#75BF42, #A3CC40)", 
                                width: "200px", // 버튼의 너비를 고정값으로 설정
                                color: "white",
                                marginBottom: "5px"
                            }}>
                            홈페이지 바로가기
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export { ResultPage };
