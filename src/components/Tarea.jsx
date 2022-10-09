import { FaTimes } from 'react-icons/fa'
const Tarea = ({ Tarea, onDelete, onToggle }) => {
  return (
    <div className={`tarea ${Tarea.terminada ? 'terminada' : ''} `} onClick={() => onToggle(Tarea.id)}>
      <h3>{Tarea.tarea} <FaTimes style={{ color: 'red' }} cursor='pointer' onClick={() => onDelete(Tarea.id)} /> </h3>
      <h4>{Tarea.fecha} </h4>
    </div>
  )
}

export default Tarea
