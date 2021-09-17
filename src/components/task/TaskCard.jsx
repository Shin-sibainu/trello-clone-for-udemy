import React, { useState } from "react";
import { TaskCardTitle } from "./TaskCardTitle";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskAddInput } from "./input/TaskAddInput";
import { Tasks } from "./Tasks";
import { Draggable } from "react-beautiful-dnd";

export const TaskCard = ({
  taskCard,
  taskCardList,
  setTaskCardList,
  index,
}) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className="taskCard"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            className="taskTitleAndDeleteButtonArea"
            {...provided.dragHandleProps}
          >
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCard={taskCard}
              taskCardList={taskCardList}
              setTaskCardList={setTaskCardList}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            setTaskList={setTaskList}
            taskList={taskList}
          />
          <Tasks taskList={taskList} setTaskList={setTaskList} />
        </div>
      )}
    </Draggable>
  );
};
