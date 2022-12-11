import './Button.css'
import icon from '../../assets/icon.png'

function InstallButton () {
  return (
    <button className='installBtn'>
      <img src={icon} />
      <a href='#'>Instale o Addon</a>
    </button>
  )
}

export default InstallButton
