import React, { useEffect, useState } from 'react'
import axios from "axios"
import Blog from './components/Blog';

export default function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get("http://r-vanderloop.local/wp-json/wp/v2/posts")
      .then((res) => {
        setPosts(res.data);
      });
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      {posts.map((item) => (
        <Blog
          post={item}
        />
      ))}
    </div>
  )
}