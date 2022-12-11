import './Card.css'

function Card (props) {
  return (
    <div className='card'>
      <img src={props.icon} />
      <h3>{props.title}</h3>
      <span>{props.description}</span>
    </div>
  )
}

export default Card
