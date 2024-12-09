var ul = document.getElementById("taskadd");
var input = document.getElementById("todobox");

function add() {
    if (input.value.trim() === '') {
        alert("Type something...");
        return;
    } else {
        var listitem = document.createElement("li");
        listitem.innerHTML = `
            <span>${input.value.trim()}</span>
            <button onclick='deleteitem(event)' id="del">DELETE</button>
            <button onclick='edititem(event)' id="edt">EDIT</button>
        `;
        ul.append(listitem);
        input.value = '';
    }
}

function deleteitem(event) {
    event.target.parentElement.remove();
}

function edititem(event) {
    var ele = event.target.parentElement; 
    var taskText = ele.querySelector("span"); 
    var newTask = prompt("Edit your task:", taskText.textContent.trim());

    if (newTask !== null && newTask.trim() !== "") {
        taskText.textContent = newTask.trim(); 
    }
}
