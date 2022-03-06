const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos=[]

function saveToDos(){
    //console.log(toDos);
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteToDo(event){
    //console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement;

    console.log(typeof(li.id));
    li.remove();
    toDos = toDos.filter(item => item.id !== parseInt(li.id));
    saveToDos();
}

function patintTodDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText ="❌"
    button.addEventListener("click", deleteToDo)

    li.appendChild(span);
    li.appendChild(button);
   
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    //console.log(toDoInput.value);
    toDoInput.value = "";

    const newTodoObj = {
        text : newTodo,
        id: Date.now(),
    }

    toDos.push(newTodoObj);

    patintTodDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)


const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(savedToDos !== null){
    const pasredToDos = JSON.parse(savedToDos);
     //forEach((item) => console.log(item));  화살표 함수

    toDos = pasredToDos; 
    // 새로고침하고 다시하면 기존에 있던 localStorage의 값이 사라져서 배열이 초기화됨
    // 이를 막기위해서 null이 아니라면 이전에 있떤 값들을 배열에 저장하고 다시 localStorage에 저장
   
    pasredToDos.forEach(patintTodDo);
    //addEventListener의 첫번째 매개변수가 event를 전달하듯이
    //foreach의 첫번째 매개변수는 item을 전달한다
    // parsedToDos 배열 안의 값들
}