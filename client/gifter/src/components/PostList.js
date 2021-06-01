import React, { useContext, useEffect } from "react";
import { PostContext } from "../providers/PostProvider";
import { useHistory } from "react-router-dom";
import Post from "./Post";

const PostList = () => {
  const { posts, getAllPosts } = useContext(PostContext);

  useEffect(() => {
    getAllPosts();
  }, []);

  const history = useHistory();

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