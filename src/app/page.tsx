import Todo from "@/components/Todo";

const Home = () => {
  return <Todo />;
};

export default Home;

// "use client";
// import React, { useState } from "react";
// import InputTodo from "@/components/InputTodo";
// import IncompleteTodo from "@/components/IncompleteTodo";
// import CompleteTodo from "@/components/CompleteTodo";
//
// const Todo = () => {
//   const [todoText, setTodoText] = useState("");
//
//   const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);
//
//   const [completeTodos, setCompleteTodos] = useState<string[]>([]);
//
//   const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) =>
//     setTodoText(event.target.value);
//
//   const onClickAdd = () => {
//     if (todoText === "") return;
//     const newTodos = [...incompleteTodos, todoText];
//     setIncompleteTodos(newTodos);
//     setTodoText("");
//   };
//
//   const onClickDelete = (index: number) => {
//     const newTodos = [...incompleteTodos];
//     newTodos.splice(index, 1);
//     setIncompleteTodos(newTodos);
//   };
//
//   const onClickComplete = (index: number) => {
//     const newIncompleteTodos = [...incompleteTodos];
//     newIncompleteTodos.splice(index, 1);
//
//     const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
//     setIncompleteTodos(newIncompleteTodos);
//     setCompleteTodos(newCompleteTodos);
//   };
//
//   const onClickBack = (index: number) => {
//     const newCompleteTodos = [...completeTodos];
//     newCompleteTodos.splice(index, 1);
//
//     const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
//     setCompleteTodos(newCompleteTodos);
//     setIncompleteTodos(newIncompleteTodos);
//   };
//
//   return (
//     <>
//       <InputTodo
//         todoText={todoText}
//         onChangeTodoText={onChangeTodoText}
//         onClickAdd={onClickAdd}
//       />
//       <IncompleteTodo
//         incompleteTodos={incompleteTodos}
//         onClickComplete={onClickComplete}
//         onClickDelete={onClickDelete}
//       />
//       <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />
//     </>
//   );
// };
//
// export default Todo;
