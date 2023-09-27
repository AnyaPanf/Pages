import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { Home } from './Pages/Home'
import { Books } from './Pages/Books'
import { List } from './Pages/List'

const App = () => {
  const [books, setBooks] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [booksPerPage, setBooksPerPage] = useState(20)
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook)
  const onTheListArr = []

  const handleMin = () => {
    setCurrentPage(prev => prev - 1)
  }

  const handlePl = () => {
    setCurrentPage(prev => prev + 1)
  }

  const handleNum = (num) => {
    setCurrentPage(num)
  }

  const handleAddToList = (key) => {
    if (onTheListArr.length[0]) {
      onTheListArr = [key]
    }
     console.log(key);
  }
 

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books
            books={books}
            setBooks={setBooks}
            currentBooks={currentBooks}
            booksPerPage={booksPerPage}
            setBooksPerPage={setBooksPerPage}
            handleMin={handleMin}
            handlePl={handlePl}
            handleNum={handleNum}
            handleAddToList={handleAddToList}
          />} />
          <Route path='/list' element={<List />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App