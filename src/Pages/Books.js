import React from 'react'
import { useState, useEffect } from 'react';
import { getPhotos } from '../API/getPhotos';
import { Card } from '../Components/Card';
import { Pagination } from '../Components/Pagination';

export const Books = ({ books, setBooks, booksPerPage, setBooksPerPage, currentBooks, handleMin, handlePl, handleNum, handleAddToList }) => {
    const booksOnPage = [5, 10, 20, 30, 40, 50, 100]

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
                        <Card key={book.id} bookImg={book.thumbnailUrl} title={book.title} handleAddToList={handleAddToList} />
                    ))
                    }
                </div>
                <Pagination books={books.length} booksPerPage={booksPerPage} handleMin={handleMin} handlePl={handlePl} handleNum={handleNum} />
            </div>
        </section>
    )
}
