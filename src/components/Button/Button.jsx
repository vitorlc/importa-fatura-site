import './Button.css'
import icon from '../../assets/icon.png'

function InstallButton() {
    return (
        <button className="installBtn">
            <img src={icon} />
            <a href="#">Install The Add-On For Free</a>            
        </button>
    )
}

export default InstallButton;