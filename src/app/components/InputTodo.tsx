import React from "react";
import {Props} from "next/script";

type Props = () => {
    todoText: string,
    onChangeTodoText: React.ChangeEvent<HTMLInputElement>;
    onClickAdd: () => void;
}

const InputTodo = (props: Props) => {
    const { todoText, onChangeTodoText, onClickAdd} = props;
    return(
        <div className={"w-400 h-30 p-8 m-8 rounded-xl bg-blue-100"}>
            <input className={"border-none rounded-xl p-4"} placeholder={"TODOを入力"} value={todoText} onChange={onChangeTodoText}/>
            <button className={"p-2 m-2 rounded-xl border-none bg-gray-300 hover:bg-amber-50"} onClick={onClickAdd}>追加</button>
        </div>
    )
}

export default InputTodo;