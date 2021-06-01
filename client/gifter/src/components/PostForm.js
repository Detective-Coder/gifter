import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../providers/PostProvider";
import { useHistory, useParams } from 'react-router-dom';

export const PostForm = () => {
  const { addPost } = useContext(PostContext);

  const {postId} = useParams();
  const history = useHistory();

  //for edit, hold on to state of animal in this view
  const [post, setPost] = useState({})

  //when field changes, update state. This causes a re-render and updates the view.
  //Controlled component
  const handleControlledInputChange = (event) => {
    //When changing a state object or array,
    //always create a copy make changes, and then set state.
    const newPost = { ...post }
    //post is an object with properties.
    //set the property to the new value
    newPost[event.target.name] = event.target.value
    //update state
    setPost(newPost)
  }

  const handleSavePost = () => {
    //POST - add
    addPost({
      title: post.title,
      image: post.imageUrl,
      caption: post.caption
    })
  }

  return (
    <form className="postForm">
      <h2 className="postForm__title">New Post</h2>
      <fieldset>
          <div className="form-group">
            <label htmlFor="postTitle">Post title: </label>
            <input type="text" id="postTitle" name="title" required autoFocus className="form-control"
            placeholder="Post title"
            onChange={handleControlledInputChange}
            defaultValue={post.title}/>
          </div>
        </fieldset>
 
    </form>
  )
}