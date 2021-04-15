// html 
const htmlForm = document.querySelector("form"),
    htmlInput = htmlForm.querySelector("input"),
    htmlP = document.querySelector("p");
// css
const localData = "user",
    cssShow = "show";
// js
// item 함수 선언
function item(comment){
    localStorage.setItem(localData, comment); // localData에 comment 값 저장
}
// value 함수 선언
function value(event){
    event.preventDefault(); // event 기능 제어
    const inputValue = htmlInput.value; // input에 입력한 값 불러오기
    dataComment(inputValue); // dataComment comment에 input에 입력한 값 넣기
    item(inputValue); // item에 input 값 전송
}
// comment 함수 선언
function comment(){
    htmlForm.classList.add(cssShow); // htmlForm 노출
    addEventListener("submit", value); // submit event실행 시 value 함수 실행
}
//  dataComment 함수 선언
function dataComment(comment){
    htmlForm.classList.remove(cssShow); // htmlForm 삭제
    htmlP.classList.add(cssShow); // htmlP 노출
    htmlP.innerText = `hello ${comment}`; // htmlP를 hello + comment로 변경
}
// start 함수 선언
function start(){
    const Data = localStorage.getItem(localData); // 로컬스토리지 아이템 localData를 받아옴
    if(Data === null){ // Data가 없을 경우 실행
        comment(); // comment함수 실행
        
    }
    else{ // Data가 있을 경우 실행
        dataComment(Data); //dataCommnet 함수 실행
    }
}
// start 함수 호출
function init(){
    start();
}
init();
