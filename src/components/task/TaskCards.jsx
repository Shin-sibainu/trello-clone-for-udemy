import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";

const reorder = (taskCardList, startIndex, endIndex) => {
  const remove = taskCardList.splice(startIndex, 1);
  taskCardList.splice(endIndex, 0, remove[0]);
};

export const TaskCards = () => {
  const [taskCardList, setTaskCardList] = useState([]);

  const handleDragEnd = (result) => {
    //タスクを並び変える
    if (!result.destination) {
      return;
    }
    reorder(taskCardList, result.source.index, result.destination.index);
    setTaskCardList(taskCardList);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className="taskCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardList.map((taskCard, index) => (
              <TaskCard
                index={index}
                key={taskCard.id}
                taskCard={taskCard}
                taskCardList={taskCardList}
                setTaskCardList={setTaskCardList}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardList={taskCardList}
              setTaskCardList={setTaskCardList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
