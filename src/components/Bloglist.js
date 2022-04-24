import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Bloglist = ({ blogs, title, handleDeleteBlog }) => {
  return (
    <div className='blogList'>
      <h2>hmed</h2>
      {blogs.map((blog) => (
        <div className='blogPreview' key={blog.id}>
          <div className='blogDetails'>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>written by {blog.author}</p>
            </Link>
          </div>
          <div className='deleteBlog'>
            <button onClick={() => handleDeleteBlog(blog.id)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
