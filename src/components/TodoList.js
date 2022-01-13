import React from "react";
// IMPORTAR COMPONENTE
import Todo from "./Todo";

// RECIBE FUNCIONES
const TodoList = ({ todos, todoDelete, todoToogleCompleted }) => {
  return (
    <div>
      <h1 className="text-right">Soy TodoList</h1>
      {/* RECORRER ARREGLO*/}
      {todos.map((todoTarea) => (
        <Todo 
        todo={todoTarea} 
        key={todoTarea.id} 
        todoDelete={todoDelete}
        todoToogleCompleted={todoToogleCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
