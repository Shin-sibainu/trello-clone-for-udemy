import React from "react";

export const TaskCardDeleteButton = ({
  taskCardList,
  setTaskCardList,
  taskCard,
}) => {
  const taskCardDelete = (id) => {
    /* タスクカードを削除する。 */
    console.log(id);
    setTaskCardList(taskCardList.filter((e) => e.id !== id));
  };

  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => taskCardDelete(taskCard.id)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};
