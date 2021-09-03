import React from "react";
import { Task } from "./Task";

export const Tasks = ({ taskList, setTaskList }) => {
  return (
    <div>
      {taskList.map((task, index) => (
        <div key={index}>
          <Task task={task} setTaskList={setTaskList} taskList={taskList} />
        </div>
      ))}
    </div>
  );
};
