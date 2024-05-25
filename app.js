function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <div class="circle" onclick="markAsFinished(this)"></div>
        <span class="task-text">${taskText}</span>
        <div class="task-actions">
            <button onclick="editTask(this)"><i class="fas fa-edit"></i></button>
            <button onclick="deleteTask(this)"><i class="fas fa-trash"></i></button>
        </div>
    `;
    document.getElementById('task-list').appendChild(taskItem);
    taskInput.value = '';
}

function editTask(button) {
    const taskItem = button.closest('li');
    const taskText = taskItem.querySelector('.task-text');
    const newTaskText = prompt('Edit your task', taskText.textContent);
    if (newTaskText) taskText.textContent = newTaskText;
}

function deleteTask(button) {
    const taskItem = button.closest('li');
    taskItem.remove();
}

function markAsFinished(circle) {
    const taskItem = circle.closest('li');
    taskItem.classList.toggle('finished');
}

function deleteAllTasks() {
    document.getElementById('task-list').innerHTML = '';
}
