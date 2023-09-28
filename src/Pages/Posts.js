import React from 'react'
import { getPosts } from '../API/getPosts'
import { useEffect, useState } from 'react'
import { Post } from '../Components/Post'

export const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPost = async () => {
      const res = await getPosts()
      setPosts(res)
    }
    getPost()
  }, [])
  console.log(posts);

  return (
    <div className='posts'>
      <div className='container'>
        <h2 className='posts__title'>Here you can discuss the books you liked with other book-lovers</h2>
        <div className='posts__wrapper'>
          {posts.map((entry) => (
            <Post id={entry.id} title={entry.title} description={entry.body} />
          ))}
        </div>
      </div>
    </div>
  )
}
