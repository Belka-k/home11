const taskInput = document.getElementById('taskInput');
const push = document.getElementById('push');
const taskList = document.getElementById('taskList');

push.addEventListener('click', function () {
    const taskText = taskInput.value;
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    taskList.append(newTask);
    taskInput.value = '';
});