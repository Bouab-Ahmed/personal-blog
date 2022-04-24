import Bloglist from './Bloglist';
import useFetch from './useFetch';
// import { useState } from "react";

const Home = () => {
  const {
    data: blogs,
    setData: setBlogs,
    IsPending,
    error,
  } = useFetch(`http://localhost:8000/blogs`);
  // *********for changing the title (stupid idea but jsut to learn)
  // const [title, setTitle] = useState("posts !");
  // const titles = ["comments", "albums", "photos", "todos", "users"];
  // const handleChangeTitle = () => {
  // 	setTitle(titles[Math.floor(Math.random() * 5)]);
  // };

  const handleDeleteBlog = (id) => {
    setBlogs((previousBlogs) => previousBlogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {IsPending && <div>Loading ...</div>}
      {blogs && (
        <Bloglist
          blogs={blogs}
          title='Posts !'
          handleDeleteBlog={handleDeleteBlog}
        />
      )}
    </div>
  );
};
export default Home;
