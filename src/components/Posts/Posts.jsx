import { useEffect, useState } from "react";
import { getPostsAPI } from "../../api/apiFunctions";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const result = await getPostsAPI();
        setPosts(result);
      } catch (error) {
        console.error("Fetch failed: ", error);
      }
    };
    getPosts();
  }, []);
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`post/${post.id}`}>
            {post.title} {post.published ? "(Published)" : "(Not Published)"}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Posts;
