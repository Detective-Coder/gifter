import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [ searchTerms, setSearchTerms ] = useState("");

  const getAllPosts = () => {
    return fetch("/api/post/GetWithComments")
      .then((res) => res.json())
      .then(setPosts);
  };

  const getPostsBySearch = () => {
    return fetch(`/api/post/search?q=${searchTerms}&sortDesc=false`)
      .then((res) => res.json())
      .then(setPosts);
  }

  const addPost = (post) => {
    
    return fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  };

  const getPost = (id) => {
    return fetch(`/api/post/getpostbyidwithcomments/${id}`).then((res) => res.json());
  };

  return (
    <PostContext.Provider value={{ posts, getAllPosts, addPost, searchTerms, setSearchTerms, getPostsBySearch, getPost }}>
      {props.children}
    </PostContext.Provider>
  );
};