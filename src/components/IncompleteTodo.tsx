import React from "react";

type IncompleteTodoProps = {
  incompleteTodos: string[];
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
};
const IncompleteTodo = ({
  incompleteTodos,
  onClickComplete,
  onClickDelete,
}: IncompleteTodoProps) => {
  return (
    <div className={"w-auto h-30 p-8 m-8 rounded-xl border-2 border-blue-300"}>
      <p className={"flex justify-center font-bold"}>未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className={"flex justify-center"}>
                <p className={"m-6"}>{todo}</p>
                <button
                  className={
                    "p-2 m-2 rounded-xl border-none bg-gray-300 hover:bg-amber-50"
                  }
                  onClick={() => onClickComplete(index)}
                >
                  完了
                </button>
                <button
                  className={
                    "p-2 m-2 rounded-xl border-none bg-gray-300 hover:bg-amber-50"
                  }
                  onClick={() => onClickDelete(index)}
                >
                  削除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IncompleteTodo;
