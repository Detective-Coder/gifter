import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import { PostSearch } from "./components/PostSearch";
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews"
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
 
      <Router>
        <PostProvider>
          <Header />
          <PostSearch />
          <ApplicationViews />
        </PostProvider>
      </Router>
    </div>
  );
}

export default App;
