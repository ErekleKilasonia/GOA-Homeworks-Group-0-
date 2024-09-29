const taskInput = document.getElementById('new');
const addTaskBtn = document.getElementById('btn');
const tasks = document.getElementById('tasks');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', function(){
        editTask(li);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function(){
        deleteTask(li);
    })
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    tasks.appendChild(li);
}

function editTask(li) {
    const newTaskText = prompt('Edit task:', li.firstChild.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        li.firstChild.textContent = newTaskText;
    }
}
function deleteTask(li) {
    li.remove();
}
