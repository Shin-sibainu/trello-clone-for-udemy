import React from "react";
import { v4 as uuid } from "uuid";

export const AddTaskCardButton = ({ taskCardList, setTaskCardList }) => {
  const addTaskCard = () => {
    const taskCardId = uuid();
    /* 新しいタスクカードを追加する。 */
    setTaskCardList([
      ...taskCardList,
      {
        id: taskCardId, //タスクカードのID。ランダムに生成されている。
        draggableId: `taskCard${taskCardId}`,
      },
    ]);
  };

  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};
