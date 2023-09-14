import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 m-12 bg-[#1111110D]">
            <h2 className="text-4xl p-4">Bookmarked Blogs: {bookmarks.length} </h2>
            <div className="m-4">
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes ={
   bookmarks: PropTypes.object.isRequired
}

export default Bookmarks;