import { useState } from 'react'

import Navbar from '../components/Navbar'
import Tareas from '../components/Tareas'
import AddTarea from '../components/AddTarea'

function App () {
  const [mostrar, setMostrar] = useState(false)
  const [tareas, setTareas] = useState([
    {
      id: '1',
      tarea: 'Llenar el tinaco',
      fecha: '15-09-2022',
      terminada: (true)
    },
    {
      id: '2',
      tarea: 'Ir al estadio',
      fecha: '19-09-2022',
      terminada: false
    },
    {
      id: '3',
      tarea: 'Cambiar la chapa',
      fecha: '21-09-2022',
      terminada: (false)
    }
  ])

  // Borrar Tareas
  const borrarTareas = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id))
  }

  // Terminar tareas
  const terminarTareas = (id) => {
    setTareas(tareas.map((tarea) => tarea.id === id ? { ...tarea, terminada: !tarea.terminada } : tarea))
  }

  // Añadir Tarea
  const AñadirTarea = (objetoTarea) => {
    const id = Math.ceil(Math.random() * 10000 + 1)
    const nuevaTarea = { id, ...objetoTarea }
    setTareas([...tareas, nuevaTarea])
  }

  return (
    <div className='container'>
      <Navbar cEstado={() => setMostrar(!mostrar)} mostrar={mostrar} />
      {!mostrar ? '' : <AddTarea onAdd={AñadirTarea} />}
      {tareas.length > 0 ? <Tareas Tareas={tareas} onDelete={borrarTareas} onToggle={terminarTareas} /> : 'No hay tareas por mostrar'}
    </div>
  )
}

export default App
