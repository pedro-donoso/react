import React, {useState} from 'react';

const initialFormValues = {
  title: '',
  description: ''
}

const TodoForm = ( {todoAdd}) => {

  // ESTADO SIEMPRE DENTRO COMPONENTE

  const [formValues, setFormValues] = useState(initialFormValues)
  const {title,description} = formValues;
  const [error, setError]=useState(null);
  const [successMessage, setSuccessMessage] = useState(null)

  const handleInputChange = (e) => {

    const changedFormValues = {
      ...formValues,
      [e.target.name] : e.target.value
    }
      setFormValues(changedFormValues)
  }

  // EVITA QUE SE RECARGUE 
  const handleSubmit = (e) => {
    e.preventDefault();

    // TRIM ELIMINA ESPACIOS EN BLANCO
    if(title.trim() === ''){
      setError('Debes indicar un título')
      return;
    }
// TRIM ELIMINA ESPACIOS EN BLANCO
    if(description.trim() === '') {
      setError('Debes indicar una descripción');
      return;
    }

    
    // AGREGAR TAREA EN APP JS
    todoAdd(formValues);
    setFormValues(initialFormValues);
    setSuccessMessage('Agregado con éxito');

    setTimeout(()=>{
      setSuccessMessage(null);
    },3000);

    setError(null);
  }

  return (
    <div>
      <h1>Nueva tarea</h1>
    <form onSubmit={handleSubmit}>
      <input 
      type='text' 
      placeholder='Título' 
      className='form-control'
      value={title}
      name='title'
      onChange={handleInputChange}
      />

      <textarea 
      placeholder='Descripción' 
      className='form-control mt-2'
      value={description}
      name='description'
      onChange={handleInputChange}
      >
      </textarea>

      <button 
      className='btn btn-primary btn-block mt-2'>
        Agregar tarea
      </button>
    </form>

    {/* MUESTRA MENSAJE TITULO VACIO */}
    {
      error && 
      (
        <div className='alert alert-danger mt-2'>
    { error }
    </div>
      )
    }

    {/* MUESTRA MENSAJE DE ÉXITO */}
    {
      successMessage && 
      (
        <div className='alert alert-success mt-2'>
    { successMessage }
    </div>
      )
    }



    </div>
    
  );
}

export default TodoForm;