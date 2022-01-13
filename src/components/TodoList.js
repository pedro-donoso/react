import React from "react";
// IMPORTAR COMPONENTE
import Todo from "./Todo";

// RECIBE FUNCIONES
const TodoList = ({ todos, todoDelete, todoToogleCompleted, setTodoEdit }) => {
  return (
    <div>
      <h1 className="text-right">Lista de Tareas</h1>

    {
      todos.length === 0
      ? (
        <div className="alert alert-primary">
          No hay tareas. Por favor agrega una 
        </div>
      )

        : 

        (

          todos.map((todoTarea) => (
        <Todo 
        todo={todoTarea} 
        key={todoTarea.id} 
        todoDelete={todoDelete}
        todoToogleCompleted={todoToogleCompleted}
        setTodoEdit={setTodoEdit}
        />

        ))
      )
}
</div>
  );
}

export default TodoList;




