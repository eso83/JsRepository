// import { store } from "./store";

//selectors
const inputEL = document.querySelector('.todoInput');
const submitEL = document.querySelector('.todoButton');
const ListEL = document.querySelector('.todoList');

//Event listeners
submitEL.addEventListener("click", addTodo);
ListEL.addEventListener("click", deleteAndDone);
//functions

function addTodo(event){
    if (inputEL.value==""){
        alert("Enter your work...")
    }
    else{
     event.preventDefault();
     const toDoDiv = document.createElement("div");
     toDoDiv.classList.add("todo");
     
     const newToDo = document.createElement("li");
     newToDo.innerText=inputEL.value;
     toDoDiv.appendChild(newToDo);

     const checkButton=document.createElement("button")
     checkButton.innerText='Done';
     toDoDiv.appendChild(checkButton);
     checkButton.classList.add("checkBtn")


     const deleteButton=document.createElement("button")
     deleteButton.innerText='Delete';
     toDoDiv.appendChild(deleteButton);
     deleteButton.classList.add("deleteBtn")
      
    ListEL.appendChild(toDoDiv);

    inputEL.value='';
   
}
}

   
function deleteAndDone(e){
    const item = e.target;
    //Delete
    if(item.classList[0]==="deleteBtn"){
        // deleteItem();
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function(){
            todo.remove()
        })   
    } 
    //Done
    if(item.classList[0]==="checkBtn"){
        const todo = item.parentElement;
        todo.classList.toggle("Done");

    }
}
console.log(store);