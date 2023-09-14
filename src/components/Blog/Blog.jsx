import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handelAddToBookmark }) => {
  const {
    cover,
    title,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div className="mt-12">
      <img
        className="rounded w-full"
        src={cover}
        alt={`Cover of this title ${title}`}
      />

      <div className="flex justify-between mt-7 mb-5 ">
        <div className="flex gap-4">
          <img className="w-14 h-14" src={author_img} alt="" />
          <div>
            <h3> {author} </h3>
            <p> {posted_date} </p>
          </div>
        </div>
        <div className="items-center justify-center text-center flex">
          <span>{reading_time} min read</span>

          <button
            onClick={() => handelAddToBookmark (blog)}
            className="ml-2 text-xl text-red-300"
          >
           
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>

      <h2 className="text-4xl"> {title} </h2>

      <p className="mt-4 mb-3">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash} </a>
          </span>
        ))}
      </p>

      <a className="underline text-[#6047EC]" href="">
        Mark as read
      </a>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handelAddToBookmark: PropTypes.func.isRequired
};

export default Blog;
