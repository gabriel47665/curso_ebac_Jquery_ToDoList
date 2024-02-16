$(document).ready(function () {

  $("#addTaskForm").on("submit", function (e) {
    e.preventDefault();
    const taskName = $("#taskInput").val();

    addTaskToList(taskName);

    $("#taskInput").val("");
  });

  $("#taskList").on("click", "li", function () {
    $(this).toggleClass("completed");
  });

  function addTaskToList(taskName) {
    const listItem = $("<li>" + taskName + "</li>");
    $("#taskList").append(listItem);
  }
});