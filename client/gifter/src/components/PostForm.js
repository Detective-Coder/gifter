import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../providers/PostProvider";
import { useHistory, useParams } from 'react-router-dom';

const PostForm = () => {
  const { addPost } = useContext(PostContext);

  // const {postId} = useParams();
  // const history = useHistory();

  // //for edit, hold on to state of animal in this view
  const [post, setPost] = useState({})

  // //when field changes, update state. This causes a re-render and updates the view.
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
      caption: post.caption,
      userProfileId; ,
      dateCreated: 
    })
  }

  return (
    <form className="postForm">
      <h2 className="postForm__title">New Post</h2>
      {/* <fieldset>
          <div className="form-group">
            <label htmlFor="postTitle">Post title: </label>
            <input type="text" id="postTitle" name="title" required autoFocus className="form-control"
            placeholder="Post title"
            onChange={handleControlledInputChange}
            defaultValue={post.title}/>
          </div>
        </fieldset> */}
        <fieldset>
          <div className="form-group">
            <label htmlFor="postTitle">Post title:</label>
            <input type="text" id="postTitle" name="title" required autoFocus className="form-control"
            placeholder="Post title"
            onChange={handleControlledInputChange}
            defaultValue={post.title} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="postImage">Post image:</label>
            <input type="text" id="postImage" name="postImage" required autoFocus className="form-control"
            placeholder="Post image"
            onChange={handleControlledInputChange}
            defaultValue={post.imageUrl} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="postCaption">Post caption:</label>
            <input type="text" id="postCaption" name="postCaption" required autoFocus className="form-control"
            placeholder="Post caption"
            onChange={handleControlledInputChange}
            defaultValue={post.caption} />
          </div>
        </fieldset>
        <button className="btn btn-primary"
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSavePost()
          }}>Save Post
        </button>
 
    </form>
    )
}

export default PostForm;