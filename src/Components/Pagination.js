import React from 'react'
import Pagination_left from "../assets/Pagination_left.png"
import Pagination_right from "../assets/Pagination_right.png"

export const Pagination = ({ books, booksPerPage, handleMin, handlePl, handleNum }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(books / booksPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleMinus = () => {
        handleMin()
    }

    const handlePlus = () => {
        handlePl()
    }

    const handleClick = (e) => {
        handleNum(Number(e.target.innerText))
    }

    return (
        <div className='books__pagination'>
            <div className='pagination__arrow'>
                <img src={Pagination_left} onClick={handleMinus} />
            </div>
            <div className='books__numbers'>
                {pageNumbers.map((number) => (
                    <p onClick={handleClick}>{number}</p>
                ))}
            </div>
            <div className='pagination__arrow'>
                <img src={Pagination_right} onClick={handlePlus} />
            </div>
        </div>
    )
}
