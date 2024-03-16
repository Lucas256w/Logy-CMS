import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import Posts from "../components/Posts/Posts";

const Homepage = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  const navigate = useNavigate();

  return (
    <div>
      {user ? (
        <>
          <div>
            <div>Welcome back {user.username}</div>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div>Here are your posts</div>
          <button onClick={() => navigate("/post/create")}>
            Create new post
          </button>
          <Posts />
        </>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default Homepage;
