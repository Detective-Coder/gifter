import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../providers/PostProvider";
import { useHistory } from "react-router-dom";
import Post from "./Post";

const PostList = () => {
  const { posts, getAllPosts } = useContext(PostContext);


  useEffect(() => {
    getAllPosts();
  }, []);

  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  // useEffect(() => {
  //   if (searchTerms !== "") {
  //     If the search field is not blank, display matching posts
  //     getPostsBySearch();
  //   } else {
  //     If the search field is blank, display all posts
  //     setFiltered(posts)
  //   }
  // }, [searchTerms, posts])

  return (
    <>
      <h2>Posts</h2>

      <div className="container">
        <div className="row justify-content-center">
          <div className="cards-column">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;