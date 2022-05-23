//globlab vars
let newTask=document.getElementById("txtTask");
let count=0;

function registerTask(){
    //get the info from the input
    //display on console------>in a html element
    console.log(newTask.value);
    let tmp=`<li id="${count}"class="task"> ${newTask.value}<button onclick="deleteTask(${count})"> <i class="fa-solid fa-trash"></i></button></li>`;
    document.getElementById("todoList").innerHTML+=tmp;
    clearForm()
    count++;
}

function deleteTask(x){
    document.getElementById(x).remove();
}
function clearForm(){
    newTask.value="";
}