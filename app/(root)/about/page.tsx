import React from "react";

const About = async () => {

const res = await fetch('https://jsonplaceholder.typicode.com/posts')    // mock api
const posts = await res.json();

  return (
  <div>
    
    <h2>RANDOM POSTS: </h2>
    {posts.map( (post: any) => {
      return (
        <div key={post.id}>
          <br />
          <p>{post.id}</p>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <br />
        </div>
      )

    })}

  </div>)


}

export default About;