import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { Home } from './Pages/Home'
import { Books } from './Pages/Books'
import { Posts } from './Pages/Posts'

const App = () => {
  const [books, setBooks] = useState([])

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books
            books={books}
            setBooks={setBooks}
          />} />
          <Route path='/posts' element={<Posts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App