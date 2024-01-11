import React from "react";

type InputTodoProps = {
  todoText: string;
  onChangeTodoText: React.ChangeEventHandler<HTMLInputElement>;
  onClickAdd: () => void;
};

const InputTodo = ({
  todoText,
  onChangeTodoText,
  onClickAdd,
}: InputTodoProps) => {
  return (
    <div className={"w-auto h-30 p-8 m-8 rounded-xl bg-blue-100"}>
      <input
        className={"border-none rounded-xl p-4"}
        placeholder={"TODOを入力"}
        value={todoText}
        onChange={onChangeTodoText}
      />
      <button
        className={
          "p-2 m-2 rounded-xl border-none bg-gray-300 hover:bg-amber-50"
        }
        onClick={onClickAdd}
      >
        追加
      </button>
    </div>
  );
};

export default InputTodo;
