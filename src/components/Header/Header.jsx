import { List } from 'phosphor-react';
import { useState } from 'react';
import InstallButton from '../Button/Button';
import './Header.css'

function Header() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <h2>notion2sheets</h2>

                    <button className="dropdown-menu-btn"
                        onClick={() => setOpen(!open)}>
                        <List width={60} />
                    </button>

                    <ul>
                        <a href="#main-content">
                            <li>Blog</li>
                        </a>
                        <a href="#cards">
                            <li>FAQ</li>
                        </a>
                        <a href="#section">
                            <li>Need Help?</li>
                        </a>
                        <a href="#footer">
                            <li>Pricing</li>
                        </a>
                    </ul>

                    <a href="#" className="downloadBtn">
                        <InstallButton />
                    </a>


                </div>


                {open &&

                    <div className="dropdown-menu">
                        <ul>
                            <a href="#">
                                <li>Blog</li>
                            </a>
                            <a href="#cards">
                                <li>FAQ</li>
                            </a>
                            <a href="#section">
                                <li>Need Help?</li>
                            </a>
                            <a href="#footer">
                                <li>Pricing</li>
                            </a>
                        </ul>

                        <a href="#">
                            <InstallButton />
                        </a>

                    </div>

                }

            </nav>
        </>
    )
}

export default Header;