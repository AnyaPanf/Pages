import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"

export const Header = () => {
    return (
            <header className='header'>
                <div className='container'>
                    <div className='header__wrapper'>
                        <div className='header__logo'>
                            <NavLink to="/"><div className='header__img'><img src={logo} alt="Logo" /></div></NavLink>
                            <NavLink to="/" className='header__text'>Pages</NavLink>
                        </div>
                        <nav className='header__nav'>
                            <NavLink to="/" className="header__link">Home</NavLink>
                            <NavLink to="/books" className="header__link">Books</NavLink>
                            <NavLink to="/posts" className="header__link">Posts</NavLink>
                        </nav>
                    </div>
                </div>
            </header>
    )
}
