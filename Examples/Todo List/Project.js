let addTodoButton=document.getElementById("AddTodo");
let TodoContainer=document.getElementById('todoContainer');
let inpuText=document.getElementById('inputText');
let ClearTodo=document.getElementById('ClearTodo');
addTodoButton.addEventListener('click',function(){
    let paragraph=document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    TodoContainer.appendChild(paragraph);
    paragraph.innerHTML=inpuText.value;
    inpuText.value="";
    paragraph.addEventListener("click",function(){
   paragraph.style.textDecoration="line-through";
    });
    paragraph.addEventListener("dblclick",function(){
        TodoContainer.removeChild(paragraph);
    });
    ClearTodo.addEventListener('click',function(){
         paragraph.remove();
    });
});