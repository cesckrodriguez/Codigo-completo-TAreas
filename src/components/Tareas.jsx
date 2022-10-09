import Tarea from './Tarea'

const Tareas = ({ Tareas, onDelete, onToggle }) => {
  return (
    <>
      {Tareas.map((tarea) => <Tarea key={tarea.id} Tarea={tarea} onDelete={onDelete} onToggle={onToggle} />)}
    </>
  )
}

export default Tareas
