import { List } from 'phosphor-react'
import { useState } from 'react'
import InstallButton from '../Button/Button'
import './Header.css'

function Header () {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav>
        <div className='nav-wrapper'>
          <h2>Importador de Faturas</h2>

          <button className='dropdown-menu-btn' onClick={() => setOpen(!open)}>
            <List width={60} />
          </button>

          <ul>
            <a href='#cards'>
              <li>Sobre</li>
            </a>
            <a href='#section'>
              <li>Dúvidas?</li>
            </a>
            <a href='#footer'>
              <li>Entre em contato</li>
            </a>
          </ul>

          <a href='#' className='downloadBtn'>
            <InstallButton />
          </a>
        </div>

        {open && (
          <div className='dropdown-menu'>
            <ul>
              <a href='#cards'>
                <li>Sobre</li>
              </a>
              <a href='#section'>
                <li>Dúvidas?</li>
              </a>
              <a href='#footer'>
                <li>Entre em contato</li>
              </a>
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}

export default Header
