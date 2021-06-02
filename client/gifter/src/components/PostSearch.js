import React, { useContext } from "react"
import { PostContext } from "../providers/PostProvider.js"

export const PostSearch = () => {
  const { setSearchTerms, getPostsBySearch } = useContext(PostContext)

  return (
    <>
      Post search:
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for a post... " 
        />
        <button onClick={() => getPostsBySearch()}>Search</button>
    </>
  )
}