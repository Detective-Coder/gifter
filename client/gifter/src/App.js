import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/PostList";
import  PostForm from "./components/PostForm";
import { PostSearch } from "./components/PostSearch";
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews"

function App() {
  return (
    <div className="App">
      <PostProvider>
        <PostSearch />
      </PostProvider>
      <Router>
        <PostProvider>
          <ApplicationViews />
        </PostProvider>
      </Router>
    </div>
  );
}

export default App;
