import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import Todos from "./components/todos";
import NewTodo from "./components/newTodo";
import SimpleContext from "./context/simpleContext";
import Header from "./components/common/Header";
import CalculateTodoNum from "./components/CalculateTodoNum";
const App = () => {
  // state = {
  //   todos: [],
  //   todo: "",
  // };
  const [getTodos, setTodos] = useState([]);
  const [getSingleTodo, setSingleTodo] = useState("");

  const inputOnChenge = (event) => {
    setSingleTodo(event.target.value);
  };
  const handleNewTodo = (event) => {
    event.preventDefault(); 
    const  todos  = getTodos;
    const todo = {
      id: Math.floor(Math.random() * 10000),
      todoText: getSingleTodo,
    };
    todos.push(todo);
    setTodos(todos);
    setSingleTodo("");

    toast.success(`.${todo.todoText} اضافه شد`);
  };
  const handleDeleteTodo = (id, todo) => {
    const todos = [...getTodos];
    let filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos( filteredTodos );
    toast.error(`.${todo} حذف شد`);
  };
  return (
    <div>
      <SimpleContext.Provider
        value={{
          todos: getTodos,
          handleNewTodo: handleNewTodo,
          inputOnChenge: inputOnChenge,
          handleDeleteTodo: handleDeleteTodo,
        }}
      >
        <Header />
        <NewTodo />

        <CalculateTodoNum />
        <Todos />

        <ToastContainer />
      </SimpleContext.Provider>
    </div>
  );
};

export default App;
