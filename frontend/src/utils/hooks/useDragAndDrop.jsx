import { useEffect, useState } from "react";

export const useDragAndDrop = (initialColumns) => {
  const [columns, setColumns] = useState(initialColumns);

  useEffect(() => {
    setColumns(initialColumns);
  }, [initialColumns]);

  const onDragStart = (e, item, fromColumn) => {
    e.dataTransfer.setData("text/plain", JSON.stringify({ item, fromColumn }));
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, toColumn, callBack) => {
    e.preventDefault();

    const data = JSON.parse(e.dataTransfer.getData("text/plain"));
    const { item, fromColumn } = data;

    if (fromColumn === toColumn) return;

    const updatedFromColumn = columns[fromColumn].filter(
      (t) => t.id !== item.id
    );

    const updatedToColumn = [...columns[toColumn], item];

    setColumns({
      ...columns,
      [fromColumn]: updatedFromColumn,
      [toColumn]: updatedToColumn,
    });
    callBack();
  };

  return {
    columns,
    onDragStart,
    onDragOver,
    onDrop,
    setColumns,
  };
};
