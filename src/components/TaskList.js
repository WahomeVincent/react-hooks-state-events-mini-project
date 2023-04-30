import React from "react";

function TaskList({tasks}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map(task => (
        <tasks key={task.id} tasks={task} />
      ))}
    </div>
  );
}

export default TaskList;
