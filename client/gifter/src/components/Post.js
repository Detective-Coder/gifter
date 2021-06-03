import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Post = ({ post }) => {


  return (
      <Card className="m-4">
        <p className="text-left px-2">Posted by: {post.userProfile.name}</p>
        <CardImg top src={post.imageUrl} alt={post.title} />
        <CardBody>
        <Link to={`/posts/${post.id}`}>
          <p>
            <strong>{post.title}</strong>
          </p>
        </Link>

          <p>{post.caption}</p>
          <div>
            {post.comments !== null ?
              (
                post.comments.map((c) => (
                  <p>{c.message}</p>
                ))
              ) : (<p>No comments yet...</p>)}
          </div>

        </CardBody>
      </Card>
  );
};

export default Post;