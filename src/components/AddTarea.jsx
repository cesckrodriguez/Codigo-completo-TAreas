import { useState } from 'react'

const AddTarea = ({ onAdd }) => {
  const [tarea, setTarea] = useState('')
  const [fecha, setFecha] = useState('')
  const [terminada, setTerminada] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!tarea) {
      alert('Ingresa una tarea')
    }

    onAdd({ tarea, fecha, terminada })

    setTarea('')
    setFecha('')
    setTerminada(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>TAREA</label>
        <input
          type='text'
          placeholder='Agregar una Tarea'
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>FECHA</label>
        <input
          type='date'
          placeholder='Agregar una Fecha'
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>TERMINADO</label>
        <input
          type='checkbox'
          value={terminada}
          checked={terminada}
          onChange={(e) => setTerminada(e.currentTarget.checked)}
        />
      </div>
      <input type='submit' value='Agregar' className='btn btn-block' />
    </form>
  )
}

export default AddTarea
