import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handelAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  };

  return (
    <>
      <div className="max-w-7xl mx-auto md:px-32 lg:px-32 px-12">
        <div className=" mb-4">
          <Header></Header>
        </div>
        <div className="md:flex">
          <Blogs handelAddToBookmark={handelAddToBookmark}></Blogs>
          <Bookmarks bookmarks={bookmarks} ></Bookmarks>
        </div>
      </div>
    </>
  );
}


export default App;
