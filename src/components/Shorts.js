import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import video4 from '../assets/video4.mp4';
import mute from '../assets/mute.png';
import volume from '../assets/volume.png';

const Shorts = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState([]);
    const [muted, setMuted] = useState(Array(4).fill(true));

    const handleMute = (index) => {
        const video = document.getElementById(`video${index}`);
        video.muted = !video.muted;
        setMuted(prev => prev.map((v, i) => i === index ? !v : v)); 
    }

    const handleSelect = (index) => {
        if (selected.includes(index)) {
            setSelected(prev => prev.filter(i => i !== index));
        } else {
            setSelected(prev => [...prev, index]);
        }
    }

    const titles = [
        "은행 플러팅",
        "워씽시 챌린지",
        "뽀삐뽀 챌린지",
        <><span>wap 챌린지</span><br /><span>(왁왁 챌린지)</span></>
    ];

    return (
        <div className="min-h-screen background-gif p-4 flex flex-col items-center justify-center bg-black">
            <div style={{
                borderRadius: '5px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                padding: '40px',
                maxWidth: '700px',
                textAlign: 'center',
                margin: 'auto'
            }}>
                <h2 className="mb-5 text-center font-DNFBitBitv2 text-4xl" style={{
                    background: "linear-gradient(#75BF42, #A3CC40)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                    내가 알고 있는 쇼츠는?
                </h2>
                <p className="text-center font-lab-digital mb-4 text-white">* 중복 선택 가능</p>
                <div className="grid font-lab-digital grid-cols-2 gap-4">
                    {[video1, video2, video3, video4].map((video, index) => (
                        <div key={index} className={`border-4 ${selected.includes(index) ? 'border-red-500' : 'border-white'} rounded relative m-4`}>
                            <h3 className="absolute top-2 left-2 text-white">{titles[index]}</h3>
                            <video id={`video${index}`} className="w-36 h-64" src={video} muted={muted[index]} loop autoPlay onClick={() => handleSelect(index)} />
                            <button onClick={() => handleMute(index)} className="absolute bottom-2 right-2 bg-white text-black px-1 py-1 rounded">
                                <img className="w-4 h-4" src={muted[index] ? mute : volume} alt="volume" />
                            </button>
                        </div>
                    ))}
                </div>

                <button onClick={() => navigate(`/test/1?selection=${selected.join(',')}`)} 
                    className="font-DNFBitBitv2 button mt-5 px-4 py-2 border rounded" 
                    style={{background: "linear-gradient(#75BF42, #A3CC40)", 
                            width: "fit-content", 
                            color: "white",
                            hover: {backgroundColor: "#92b837"}, 
                            active: {backgroundColor: "#819d34"}}}>
                    다음
                </button>
            </div>
        </div>
    );
}

export { Shorts };
