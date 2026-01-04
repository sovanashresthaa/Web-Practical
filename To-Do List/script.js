$(document).ready(function () {

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function renderTasks() {
        $("#taskList").empty();

        tasks.forEach((task, index) => {
            $("#taskList").append(`
                <li>
                    ${task}
                    <button class="delete" data-index="${index}">Delete</button>
                </li>
            `);
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    $("#addTask").click(function () {
        let task = $("#taskInput").val().trim();

        if (task !== "") {
            tasks.push(task);
            $("#taskInput").val("");
            renderTasks();
        }
    });

    $("#taskList").on("click", ".delete", function () {
        let index = $(this).data("index");
        tasks.splice(index, 1);
        renderTasks();
    });

    renderTasks();
});