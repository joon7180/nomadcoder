const commentData = document.querySelector(".name-data"),
    commentInput = commentData.querySelector("input"),
    commentList = document.querySelector(".comment");

const TODOS_LS = "toDos";
// array[배열함수]에 데이터 추가
const toDos = [];

// toDos를 가져와서 로컬에 저장하는 일을 하게 될거야
// local storage에는 자바스크립트의 data를 젖아할 수가 없다. 오직 string만 저장할 수 있다.
// 그래서 우리는 object가 string이 되도록 만들어야해, 그걸 위해서 우린 아주 좋은 트릭인 json.stringify를 사용할거야
// JSON은 그냥 자바스크립트 object notation의 준말이며, 데이터를 전달할 때 자바스크립트가 그걸 다룰 수 있도록 object로 바꿔주는 기능인 셈이야(object > string, string > object)
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function comment(text){
    const htmlLi = document.createElement("li");
    const htmlBtn = document.createElement("button");
    htmlBtn.value = "close";
    const htmlSpan = document.createElement("span");
    const newId = toDos.length + 1;
    htmlSpan.innerText = text;
    htmlLi.appendChild(htmlSpan);
    htmlLi.appendChild(htmlBtn);
    htmlLi.id = newId; // li에 아이디 추가
    commentList.appendChild(htmlLi);
    const toDoObj = {
        text : text,
        id : newId
    }
    // toDos 함수에 todos를 추가한다. 
    toDos.push(toDoObj);
    saveToDos();
}
function initStart(event){
    event.preventDefault();
    const data = commentInput.value;
    comment(data);
    commentInput.value = "";
}
function something(toDo){
    comment(toDo.text);
}

function start(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(something);//array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜 주는거야
    }
}

function init(){
    start();
    commentData.addEventListener("submit", initStart);
};
init();