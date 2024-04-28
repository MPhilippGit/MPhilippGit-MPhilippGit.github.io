let taskId = 0;

const submitBtn = document.getElementById('inputBtn');
const dateInput = document.getElementById('dateInput');
const taskInput = document.getElementById('taskInput');
const unorderedList = document.getElementById('taskList');

submitBtn.addEventListener('click' ,() => {
    let date = dateInput.value;
    let task = taskInput.value;
    taskId+=1;
    toString(taskId);

    console.log(typeof(date));
    createListElements(task, date, taskId);
});


function createListElements(tasks, dates){
    let newItem = document.createElement('tr');
    let newTask = document.createElement('td');
    let newDate = document.createElement('td');
    let deleteBtn = document.createElement('button');


    newTask.innerText = tasks;
    newDate.innerText = dates;
    deleteBtn.id = 'btn' + taskId;
    deleteBtn.innerText = '❌';

    newItem.appendChild(deleteBtn);
    newItem.appendChild(newTask);
    newItem.appendChild(newDate);
    newItem.id = taskId;

    unorderedList.appendChild(newItem);

    console.log(newTask.innerText);
    console.log(dates);
}

