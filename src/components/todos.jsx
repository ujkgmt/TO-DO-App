import React, { useContext }  from 'react';
import SimpleContext from '../context/simpleContext';

import Todo from "./todo"

const Todos = () => {
    const context = useContext(SimpleContext)
    return (



        <div dir= "rtl">
            {context.todos.map(todo =>(

            <Todo
            key ={todo.id}
            todoText ={todo.todoText}
            deleteTodo = {()=>context.handleDeleteTodo(todo.id ,todo.todoText)}
            />
            ))}
        </div>


);
}

export default Todos;