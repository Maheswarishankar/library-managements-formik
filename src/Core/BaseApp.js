import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function BaseApp({ title, children, Button }) {
    const [isMobile, setIsMobile] = useState(false)
    return (
        <div>
            <nav className='navbar'>
                <div className='logo'>
                    <img src='https://cdn-icons-png.flaticon.com/512/552/552487.png?w=740&t=st=1684399736~exp=1684400336~hmac=5959bf4f7cec3eec0a74379ef920c4bd20cdc7723c883cc3fa25a10a458cadfc' alt='img'></img>
                    <h1>Library</h1>
                </div>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                    onClick={() => setIsMobile}>
                    <Link to="/"><li className='home'>Home</li></Link>
                    <Link to="/motivation"><li className='moti'>Motivation</li></Link>
                    <Link to="/abdulkalam"><li className='ABJ'>ABJ.Abdul Kalam</li></Link>
                    <Link to="/tamilbook"><li className='Tamil'>Tamil Book</li></Link>
                    <Link to='/englishbook'><li className='English'>English Story</li></Link>
                </ul>
                <button className='mobile-menu-icon'
                    onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? (
                        <i className='fas fa-times'></i>

                    ) : (
                        <i className='fas fa-bars'></i>
                    )
                    }

                </button>

                <footer>
                    <p>Copyright © Your Website 2023</p>
                </footer>
            </nav>

            <div className='title'>
                {title}
            </div>

            <div className='children'>
                {children}
            </div>
            <div className='Button'>
                {Button}
            </div>

        </div>

    )
}

export default BaseApp
