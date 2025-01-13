/*명언을 가져와서 객체로 저장
랜덤값 생성
랜던값에 해당하는 인덱스의 명언을 시현*/

const quotes = [
    {
        id: 1,
        quote: "삶이 있는 한 희망은 있다 -키케로"
    },
    {
        id:2,
        quote: "산다는것 그것은 치열한 전투이다. -로망로랑"
    },
    {
        id:3,
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다. -사무엘존슨"
    },
    {
        id:4,
        quote: "언제나 현재에 집중할수 있다면 행복할것이다. -파울로 코엘료"
    },
    {
        id: 5,
        quote:"진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해 -찰리 채플린"
    },
    {
        id:6,
        quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다 -엘버트 허버드"
    },
    {
        id:7,
        quote: "신은 용기있는자를 결코 버리지 않는다 -켄러"
    },
    {
        id:8,
        quote: "피할수 없으면 즐겨라 – 로버트 엘리엇"
    },
    {
        id:9,
        quote: "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?-이드리스"
    },
    {
        id:10,
        quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에 – 엘사 맥스웰"
    }
];

const randomNumber = Math.floor(Math.random() * quotes.length);
const quoteInput = document.getElementById("quote");
quoteInput.innerText = quotes[randomNumber].quote;
