import React from 'react'
import { useState, useEffect } from 'react';
import { getPhotos } from '../API/getPhotos';
import { Card } from '../Components/Card';
import { Pagination } from '../Components/Pagination';

export const Books = ({ books, setBooks }) => {
    const booksOnPage = [5, 10, 20, 30, 40, 50, 100]
    const [currentPage, setCurrentPage] = useState(1)
    const [booksPerPage, setBooksPerPage] = useState(20)
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook)

    const handleInput = (e) => {
        setBooksPerPage(e.target.value)
    }

    useEffect(() => {
        const getBooks = async () => {
            const res = await getPhotos()
            setBooks(res.slice(0, 100))
        }
        getBooks()
    }, [])

    return (
        <section className='books'>
            <div className='container'>
                <h2 className='books__title'>All Books</h2>
                <div className='books__onpage'>
                    <p>Books on page:</p>
                    <select defaultValue={20} onInput={handleInput}>
                        {booksOnPage.map((num) => (
                            <option>{num}</option>
                        ))}
                    </select>
                </div>
                <div className='books__wrapper'>
                    {currentBooks.map((book) => (
                        <Card id={book.id} bookImg={book.thumbnailUrl} title={book.title} />
                    ))
                    }
                </div>
                <Pagination books={books.length} booksPerPage={booksPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </section>
    )
}
