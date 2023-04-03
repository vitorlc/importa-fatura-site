import './Button.css'
import icon from '../../assets/icon.png'

function Button ({ showIcon, text, href='#' }) {
  return (
    <button className='installBtn'>
      {showIcon && <img src={icon} />}
      <a href={href}>{text}</a>
    </button>
  )
}

export default Button
