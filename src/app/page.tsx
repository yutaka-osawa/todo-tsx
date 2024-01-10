"use client";
import React, {useState} from 'react';
import styles from './styles.module.css';
import InputTodo from "@/app/components/InputTodo";

const Todo = () => {
    const [todoText, setTodoText] = useState("");

    const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);

    const [completeTodos, setCompleteTodos] = useState<string[]>([]);

    const onChangeTodoText = (event:React.ChangeEvent<HTMLInputElement>) => setTodoText(event.target.value);

    const onClickAdd = () => {
        if(todoText === "") return;
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText("");
    };

    const onClickDelete = (index: number) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1);
        setIncompleteTodos(newTodos);
    }

    const onClickComplete = (index: number) => {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);

        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    }

    const onClickBack = (index: number) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);

        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
        setCompleteTodos(newCompleteTodos);
        setIncompleteTodos(newIncompleteTodos);
    }

  return(
      <>
          {/*<div className={"w-auto h-30 p-8 m-8 rounded-xl bg-blue-100"}>*/}
          {/*    <input className={"border-none rounded-xl p-4"} placeholder={"TODOを入力"} value={todoText} onChange={onChangeTodoText}/>*/}
          {/*    <button className={"p-2 m-2 rounded-xl border-none bg-gray-300 hover:bg-amber-50"} onClick={onClickAdd}>追加</button>*/}
          {/*</div>*/}
          <InputTodo todoText={todoText} onChangeTodoText={onChangeTodoText} onClickAdd={onClickAdd}/>
        <div className={"w-auto h-30 p-8 m-8 rounded-xl border-2 border-blue-300"}>
            <p className={"flex justify-center font-bold"}>未完了のTODO</p>
            <ul>
                {incompleteTodos.map((todo, index) => {
                    return(
                        <li key={todo}>
                            <div className={"flex justify-center"}>
                                <p className={"m-6"}>{todo}</p>
                                <button className={"p-2 m-2 rounded-xl border-none bg-gray-300 hover:bg-amber-50"} onClick={() => onClickComplete(index)}>完了</button>
                                <button className={"p-2 m-2 rounded-xl border-none bg-gray-300 hover:bg-amber-50"} onClick={() => onClickDelete(index)}>削除</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className={"w-auto h-30 p-8 m-8 rounded-xl border-2 border-blue-300 bg-gray-200"}>
            <p className={"flex justify-center font-bold"}>完了のTODO</p>
            <ul>
                {completeTodos.map((todo, index) => {
                    return(
                        <li key={todo}>
                            <div className={"flex justify-center"}>
                                <p className={"m-6"}>{todo}</p>
                                <button className={"p-2 m-2 rounded-xl border-none bg-gray-300 hover:bg-amber-50"} onClick={() => onClickBack(index)}>戻す</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
      </>
  )
}

export default Todo;