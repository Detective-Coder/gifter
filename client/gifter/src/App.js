import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <PostProvider>
      <Route exact path="/posts/create">
        <PostForm />
      </Route>
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;
