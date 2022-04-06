// selectors

const  todoInput= document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions
function addTodo(event){




    // stop form from submitting
    event.preventDefault(); 


   

    //create li
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //CHECK TRASH   BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    
 //make sure input isn't blank
 if (todoInput.value !== "" && todoInput.value !== null) {
         //APPEND TO LIST

    todoList.appendChild(todoDiv);
        
}


    //Clear todoInput value

    todoInput.value = "";

}


function deleteCheck(e){
    const item = e.target;
    console.log(e.target)
    //delete todo
    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;

        //transition begin
        todo.classList.add('fall')
        //wait for css transition to end before removing
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })        
    }    


// CHECK MARK

if(item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed")
}
}


