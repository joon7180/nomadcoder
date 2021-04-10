// const form = document.querySelector(".js-title"), // html div
//     input = form.querySelector("input"), // html input
//     greeting = document.querySelector(".js-greeting"); // html h4

// const USER_LS = "currentUser",
//     SHOWING_CN = "showing"; // display : block;

// function paintGreeting(text){ 
//     form.classList.remove(SHOWING_CN); // html div에 classname showing 제거
//     greeting.classList.add(SHOWING_CN); // css showing을 classname으로 추가해서 노출(display:block;)
//     greeting.innerText = `hello ${text}` // h4에 hello + text 문구로 변경
// }

// function loadName(){ // 로컬스토리지를 가져오는 함수
//     const currentUser = localStorage.getItem(USER_LS); // currentUser 함수에 USER_LS(currentUser)를 로컬 스토리지를 불러오는 함수
//     if(currentUser === null){ // currentUser가 없는 경우에 실행문 실행

//     }
//     else{ // currentUser가 있는 경우에 실행문 실행
//         paintGreeting(currentUser); // 
//     }
// }

// function init(){ // 함수 호출
//     loadName();
// }
// init();

// html function
const htmlForm = document.querySelector(".js-form"),
    htmlInput = htmlForm.querySelector("input"),
    htmlH4 = document.querySelector(".js-greeting");
// css function
const cssShow = "showing",
    User = "User";

// function
function change(text){
    htmlForm.classList.remove(cssShow);
    htmlInput.classList.add(cssShow);
    htmlH4.innerText = `Hello ${text}` 
}

function comment(){
    const localUser = localStorage.getItem(User);
    if(localUser === null){

    }
    else{
        change(localUser)
    }
}

function init(){
    comment();
}
init();