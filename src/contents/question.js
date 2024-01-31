import test1 from '../assets/test1.png';
import test2 from '../assets/test2.jpg';
import test3 from '../assets/test3.png';
import test4 from '../assets/test4.png';
import test5 from '../assets/test5.png';
import test6 from '../assets/test6.jpg';

const question = [
    {
        title: "내 안의 도파민을 싸-악 돌게 하는 상황은?",
        image: test1,
        content: [
            {
                answer: "남몰래 쓴 소설이 대박 나 아무도 모르게 통장에 10억 꽂히기",
                weight: [0, 0, 3, 5, 0, 0] // 도파민 탐험가 및 서퍼에 가장 큰 영향
            },
            {
                answer: "외제차까지 협찬 받는 300만 팔로워 인플루언서 되기",
                weight: [0, 1, 0, 3, 5, 0] // 도파민 미각관, 서퍼, 중독자에 영향
            }
        ]
    },
    {
        title: "왕복 3시간 통학 중, 배터리가 10%라고?",
        image: test2,
        content: [
            {
                answer: "도파민 충전이 우선이지! 배터리를 다 써버린다.",
                weight: [0, 0, 0, 3, 5, 0] // 도파민 서퍼 및 중독자에 영향
            },
            {
                answer: "창 밖만 구경하는 광기를 보여준다.",
                weight: [5, 0, 0, 0, 0, 0] // 도파민 저체온증에 영향
            }
        ]
    },
    {
        title: "둘 중 더 손절 하고 싶은 친구는?",
        image: test3,
        content: [
            {
                answer: "만날 때마다 정치 이야기하는 친구",
                weight: [5, 0, 0, 0, 0, 0] // 도파민 저체온증에 영향
            },
            {
                answer: "만날 때마다 교회 가자고 전도하는 친구",
                weight: [0, 0, 5, 0, 0, 0] // 도파민 탐험가에 영향
            },
            {
                answer: "만날 때마다 여소/남소해달라는 친구",
                weight: [0, 0, 0, 0, 5, 0] // 도파민 중독자에 영향
            },
            {
                answer: "만날 때마다 뒷담까는 친구",
                weight: [0, 0, 0, 0, 0, 5] // 도파민 제왕에 영향
            }
        ]
    },
    {
        title: "소원을 이루어주는 마법의 물약을 마시면 이루어졌으면 하는 것은?",
        image: test4,
        content: [
            {
                answer: "평생 모태솔로이지만, 원하는 대학/직장 가기",
                weight: [0, 3, 5, 0, 0, 0] // 도파민 미각관 및 탐험가에 영향
            },
            {
                answer: "평생 백수이지만, 카리나/송강과 사귀기",
                weight: [0, 0, 0, 5, 0, 0] // 도파민 서퍼에 영향
            }
        ]
    },
    {
        title: "기분이 우울할때 나는?",
        image: test5,
        content: [
            {
                answer: "마라엽떡을 먹고 후식으로 탕후루로 당스파이크 때린다.",
                weight: [0, 0, 0, 0, 3, 5] // 도파민 중독자 및 제왕에 영향
            },
            {
                answer: "무기력해져서 누워서 쇼츠만 본다",
                weight: [3, 5, 0, 0, 0, 0] // 도파민 저체온증 및 미각관에 영향
            }
        ]
    },
    {
        title: "불면증으로 잠이 안 올때 나는?",
        image: test6,
        content: [
            {
                answer: "유튜브에 들어가 쇼츠 무한굴레",
                weight: [0, 0, 0, 0, 5, 0] // 도파민 중독자에 영향
            },
            {
                answer: "핸드폰을 내려놓고 양을 센다",
                weight: [5, 0, 0, 0, 0, 0] // 도파민 저체온증에 영향
            }
        ]
    }
];

export { question };
