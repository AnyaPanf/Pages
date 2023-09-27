import React from 'react'
import { NavLink } from 'react-router-dom'
import main_img from "../assets/main_pic.png"

export const Home = () => {
    return (
        <main className='main'>
            <div className='container'>
                <div className='main__wrapper'>
                    <div className='main__text'>
                        <p className='main__subitle'>Welcome to Pages!</p>
                        <h1 className='main__title'>All your favorite books from all over <br/>the world.</h1>
                        <p className='main__desc'>We believe that reading books is essential to a healthy culture. Discover more
                            breathtaking books with Pages.</p>
                            <NavLink to="/books" className='main__btn'>Get started!</NavLink>
                    </div>
                    <div className='main__img'>
                        <img src={main_img} />
                    </div>
                </div>
            </div>
        </main>
    )
}
