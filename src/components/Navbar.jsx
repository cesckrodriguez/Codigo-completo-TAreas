import Button from './Button'

const Navbar = ({ cEstado, mostrar }) => {
  return (
    <div className='header'>
      <h1>Tareas</h1>
      <Button texto={mostrar ? 'Ocultar' : 'Agregar Tarea'} color={mostrar ? 'red' : 'green'} cEstado={cEstado} />
    </div>
  )
}

export default Navbar
