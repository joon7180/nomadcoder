// #3-0 making a js clock part one
// const title = document.querySelector(".js-title");
// const titleSon = title.querySelector("h1");
// function start(){
//     const date = new Date();
//     const houersDate = date.getHours();
//     const minDate = date.getMinutes();
//     const secondsDate = date.getSeconds();
//     titleSon.innerText = `${houersDate}:${minDate}:${secondsDate}`;
// }


// function init(){
//     start();
// }
// init();

// 3-1 making a js clock part two

const title = document.querySelector(".js-title"); // html .js-title
const time = title.querySelector("h1"); // html h1(00:00)

function comment(){
    const date = new Date(); // 로컬 Date를 함수에 저장
    const hourDate = date.getHours(); // 로컬 시간을 함수에 저장
    const minuteDate = date.getMinutes(); // 로컬 분을 함수에 저장
    const secondDate = date.getSeconds(); // 로컬 초를 함수에 저장

    time.innerText = `${hourDate < 10 ? `${hourDate}` : hourDate}:${minuteDate < 10 ? `0${minuteDate}` : minuteDate}:${secondDate < 10 ? `0${secondDate}` : secondDate}`;
    // secondDate 기준 : scondDate가 10보다 작으면(?=if) return, 작지 않으면(:=else) return 
}

function init(){
    comment(); // comment 함수를 실행
    setInterval(comment,1000); // 1초에 한 번씩 comment 함수를 실행
}
init();


// setInterval(function , time) = 지정한 지연시간만큼 함수를 실행시킨다.
// 백틱${}을 사용한다 , 백틱에서 if문은 ? = if , : = else을 의미한다.