import React from "react";

type CompleteTodoProps = {
  completeTodos: string[];
  onClickBack: (index: number) => void;
};

const CompleteTodo = ({ completeTodos, onClickBack }: CompleteTodoProps) => {
  return (
    <div
      className={
        "w-auto h-30 p-8 m-8 rounded-xl border-2 border-blue-300 bg-gray-200"
      }
    >
      <p className={"flex justify-center font-bold"}>完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className={"flex justify-center"}>
                <p className={"m-6"}>{todo}</p>
                <button
                  className={
                    "p-2 m-2 rounded-xl border-none bg-gray-300 hover:bg-amber-50"
                  }
                  onClick={() => onClickBack(index)}
                >
                  戻す
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CompleteTodo;
