
function deleteCurrentToDo(event) {
    console.log(event);
    event.target.parentElement.remove(this);
}

function editCurrentToDo(event) {
    const row = event.target.parentElement;
    const [todoText, todoPriority, todoDate] = row.querySelectorAll('td');

    document.getElementById("todoText").value = todoText.innerText;
    document.getElementById("todoPriority").value = todoPriority.innerText;
    document.getElementById("todoDate").value = todoDate.innerText;
}

function addToDoItemToList() {
    var todoItemText = document.getElementById("todoText").value;
    var todoPriority = document.getElementById("todoPriority").value;
    var todoDate = document.getElementById("todoDate").value;

    console.log(todoItemText);
    console.log(todoPriority);
    console.log(todoDate);
    if (todoItemText.trim() === '' || todoPriority === '' || todoDate === '') {
        alert("some data is missing please re try");
    } else {

        var todoTab = document.getElementById("todoTab");
        todoTab.border = 1;
        var todoRow = document.createElement("tr");
        var todoDeleteBtn = document.createElement("button");
        todoDeleteBtn.innerHTML = 'DELETE';
        var todoEditBtn = document.createElement("button");
        todoEditBtn.innerHTML = 'EDIT';

        var todoTxtTd = document.createElement("td");
        todoTxtTd.innerText = todoItemText;

        var todoPriTd = document.createElement("td");
        todoPriTd.innerText = todoPriority;

        var todoDateTd = document.createElement("td");
        todoDateTd.innerText = todoDate;

        todoRow.appendChild(todoTxtTd);
        todoRow.appendChild(todoPriTd);
        todoRow.appendChild(todoDateTd);

        todoDeleteBtn.addEventListener("click", deleteCurrentToDo);
        todoEditBtn.addEventListener("click", editCurrentToDo);

        todoRow.appendChild(todoDeleteBtn);
        todoRow.appendChild(todoEditBtn);
        todoTab.appendChild(todoRow);

        var todoListDiv = document.getElementById("todoListDiv");
        todoListDiv.appendChild(todoTab);

        const todoInput = document.querySelector('#todoText');
        const priorityInput = document.querySelectorAll('#todoPriority');
        const dateInput = document.querySelectorAll('#todoDate');
    }
}