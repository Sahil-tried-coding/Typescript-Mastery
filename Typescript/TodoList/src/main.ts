import "./style.css";

const myform = document.querySelector("form") as HTMLFormElement;

const input = document.getElementById("todo-input") as HTMLInputElement;

const addBtn = document.getElementById("addBtn") as HTMLButtonElement;

const todoContainer = document.querySelector(
  ".todo-container"
) as HTMLDivElement;

interface TODO {
  id: number;
  title: string;
  isCompleted: boolean;
}

const myTodo: TODO[] = [];


const addTodo = () => {
  const todotext = input.value.trim();
  
  const newTodo: TODO = {
    id: Date.now(),
    title: todotext,
    isCompleted: false,
  };

  myTodo.push(newTodo);
  input.value = "";
  
  renderTodos();
};

const renderTodos = () => {
  const mainTodoContainer = document.createElement("div") as HTMLDivElement;
  const todoMsg = document.createElement("h1") as HTMLHeadingElement;
  let todoChekbox = document.createElement("input") as HTMLInputElement;
  const deleteTodo = document.createElement("button") as HTMLButtonElement;

  mainTodoContainer.id = "mainTodoContainer";
  todoContainer.innerHTML = "";
  
  
  myTodo.forEach((value)=>{
    todoMsg.innerText = value.title;
    todoMsg.className = value.isCompleted? "todoCompleted":"todoTitle";
    
    
    
    todoChekbox.type = "checkbox";
  todoChekbox.className = "checkboxOp";
  todoChekbox.checked = value.isCompleted;
  todoChekbox.addEventListener('change',()=>toggleTodo(value.id))
  
  deleteTodo.className = "deleteBtn";
  deleteTodo.textContent = "X";
  
  deleteTodo.addEventListener("click",()=>deleteTodoFunc(value.id))
  

  mainTodoContainer.append(todoChekbox,todoMsg,deleteTodo);
  todoContainer.append(mainTodoContainer);
  



})

};
const toggleTodo = (id:number) =>{
  
  const todo = myTodo.find(t=>t.id == id)
  
  if(todo){
    todo.isCompleted = !todo.isCompleted
    renderTodos()
  }
}
const deleteTodoFunc = (id:number) =>{
  
  const index = myTodo.findIndex((t)=>t.id == id)
  
  if(index !== -1){
    myTodo.splice(index,1)
    renderTodos()
  }
}
myform.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  addTodo();
});
