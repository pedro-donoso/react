import React from 'react';

// RECIBE FUNCIONES EN ARGUMENTO
const Todo = ({todo, todoDelete, todoToogleCompleted}) => {

  return (

    <div className='card mt-2'>
      <div className='card-body'>
        <h1 className='card-title text-right'>
          {todo.title}
          <button 
          onClick={() => todoToogleCompleted(todo.id)}
          // TEMPLATE STRING
          className={`btn btn-sm ${todo.completed ? 'btn-outline-success' : 'btn-success'} ml-2`}>
        
        {/* CAMBIA SI ESTA LA TAREA COMPLETA */}
          {todo.completed ? 'Terminado' : 'Terminar'}

          </button>
        </h1>
        <p className='card-text text-right'>
          {todo.description}
        </p>
        <hr />
        <div className='d-flex justify-content-end'>
          <button className='btn btn-sm btn-outline-primary mr-2'>
        Editar
        </button>
        {/* ELIMINA TO DO */}
        <button onClick={ () => todoDelete(todo.id)} className='btn btn-sm btn-outline-danger'>
        Eliminar
        </button>
        </div>
      </div>
    </div>
  )
}

// EXPORTAR
export default Todo;