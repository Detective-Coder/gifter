// import React, { useContext, useEffect, useState } from "react";
// import { PostContext } from "../providers/PostProvider";
// import { useHistory, useParams } from 'react-router-dom';

// const PostForm = () => {
//   const { addPost } = useContext(PostContext);

//   // const {postId} = useParams();
//   // Use this hook to allow us to programatically redirect users
//   const history = useHistory();

//   // //for edit, hold on to state of animal in this view
//   const [post, setPost] = useState({})

//   // //when field changes, update state. This causes a re-render and updates the view.
//   //Controlled component
//   const handleControlledInputChange = (event) => {
//     //When changing a state object or array,
//     //always create a copy make changes, and then set state.
//     const newPost = { ...post }
//     //post is an object with properties.
//     //set the property to the new value
//     newPost[event.target.name] = event.target.value
//     //update state
//     setPost(newPost)
//   }

//   const handleSavePost = () => {
//     //POST - add
//     addPost({
//       title: post.title,
//       imageUrl: post.postImage,
//       caption: post.postCaption,
//       userProfileId: 1,
//       dateCreated: "2020-04-20T00:00:00"
//     })
//   }

//   return (
//     <form className="postForm">
//       <h2 className="postForm__title">New Post</h2>

//         <fieldset>
//           <div className="form-group">
//             <label htmlFor="postTitle">Post title:</label>
//             <input type="text" id="postTitle" name="title" required autoFocus className="form-control"
//             placeholder="Post title"
//             onChange={handleControlledInputChange}
//             defaultValue={post.title} />
//           </div>
//         </fieldset>
//         <fieldset>
//           <div className="form-group">
//             <label htmlFor="postImage">Post image:</label>
//             <input type="text" id="postImage" name="postImage" required autoFocus className="form-control"
//             placeholder="Post image"
//             onChange={handleControlledInputChange}
//             defaultValue={post.imageUrl} />
//           </div>
//         </fieldset>
//         <fieldset>
//           <div className="form-group">
//             <label htmlFor="postCaption">Post caption:</label>
//             <input type="text" id="postCaption" name="postCaption" required autoFocus className="form-control"
//             placeholder="Post caption"
//             onChange={handleControlledInputChange}
//             defaultValue={post.caption} />
//           </div>
//         </fieldset>
//         <button className="btn btn-primary"
//           onClick={() => {
//             //event.preventDefault() // Prevent browser from submitting the form and refreshing the page
//             handleSavePost()
            
//           }}>Save Post
//         </button>
 
//     </form>
//     )
// }

// export default PostForm;

import React, { useState, useContext } from "react";
import {
  Form,
  FormGroup,
  Card,
  CardBody,
  Label,
  Input,
  Button,
} from "reactstrap";
import { PostContext } from "../providers/PostProvider";
import { useHistory } from "react-router-dom";

const PostForm = () => {
  const { addPost } = useContext(PostContext);
  const [userProfileId, setUserProfileId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");

  // Use this hook to allow us to programatically redirect users
  const history = useHistory();

  const submit = (e) => {
    const post = {
      imageUrl,
      title,
      caption,
      userProfileId: +userProfileId,
      dateCreated: "2020-04-20T00:00:00"
    };

    addPost(post).then((p) => {
      // Navigate the user back to the home route
      history.push("/");
    });
  };

  return (
    <div className="container pt-4">
      <div className="row justify-content-center">
        <Card className="col-sm-12 col-lg-6">
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="userId">User Id (For Now...)</Label>
                <Input
                  id="userId"
                  onChange={(e) => setUserProfileId(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="imageUrl">Gif URL</Label>
                <Input
                  id="imageUrl"
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input id="title" onChange={(e) => setTitle(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label for="caption">Caption</Label>
                <Input
                  id="caption"
                  onChange={(e) => setCaption(e.target.value)}
                />
              </FormGroup>
            </Form>
            <Button color="info" onClick={submit}>
              SUBMIT
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default PostForm;