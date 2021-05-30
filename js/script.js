{
    const tasks = [];

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const addNewTask = (newTaskContent) => {
        tasks.push({ content: newTaskContent });
        render();
    };

       const bindRemoveEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                removeTask(taskIndex);
            });
        });
    };

    const bindToggleDoneEvents = () => {
        const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

        toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(taskIndex);
            });
        });
    };

    const render = () => {
        let tasksListHTML = "";

        for (const task of tasks) {
            tasksListHTML += `
            <li
                class="task__button js-done"
            >
                <button class="task__button tasks__button-toggleDone js-toggleDone">
                ${task.done ? "✔" : " "}
                </button>
                <span class="tasks_content${task.done ? "tasks__content--done" : ""}">${task.content}</span>
                <button class="task__button tasks__button-toggleDone js-toggleDone">
                🗑
                </button>
            </li>
            `;
        };

        document.querySelector(".js-tasks").innerHTML = tasksListHTML;

        bindRemoveEvents();
        bindToggleDoneEvents();
    };


    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        }

        newTaskElement.focus();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}