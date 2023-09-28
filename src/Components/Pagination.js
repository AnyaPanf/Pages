import React from 'react'
import Pagination_left from "../assets/Pagination_left.png"
import Pagination_right from "../assets/Pagination_right.png"

export const Pagination = ({ books, booksPerPage, setCurrentPage, currentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(books / booksPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleMinus = () => {
        setCurrentPage(prev => prev - 1)
    }

    const handlePlus = () => {
        setCurrentPage(prev => prev + 1)
    }

    const handleClick = (e) => {
        setCurrentPage(Number(e.target.innerText))
    }

    return (
        <div className='books__pagination'>
            <button className='pagination__arrow' disabled={currentPage === 1}>
                <img src={Pagination_left} onClick={handleMinus} />
            </button>
            <div className='books__numbers'>
                {pageNumbers.map((number) => (
                    <p onClick={handleClick}>{number}</p>
                ))}
            </div>
            <button className='pagination__arrow' disabled={currentPage === Math.ceil(books / booksPerPage)}>
                <img src={Pagination_right} onClick={handlePlus} />
            </button>
        </div>
    )
}
