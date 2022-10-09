
const Button = ({ texto, cEstado, color }) => {
  return (
    <button className='btn' onClick={cEstado} style={{ background: color }}>{texto} </button>
  )
}

export default Button
