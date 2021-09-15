import React, { useState } from "react";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";

export const TaskCards = () => {
  const [taskCardList, setTaskCardList] = useState([]);

  return (
    <div className="taskCardsArea">
      {taskCardList.map((taskCard) => (
        <TaskCard
          key={taskCard.id}
          taskCard={taskCard}
          taskCardList={taskCardList}
          setTaskCardList={setTaskCardList}
        />
      ))}

      <AddTaskCardButton
        taskCardList={taskCardList}
        setTaskCardList={setTaskCardList}
      />
    </div>
  );
};
