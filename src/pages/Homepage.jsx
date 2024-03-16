import { useOutletContext } from "react-router-dom";
import Posts from "../components/Posts/Posts";

const Homepage = () => {
  const { user } = useOutletContext();
  if (user) {
    return (
      <div>
        {user ? (
          <>
            <div>Welcome back {user.username}</div>
            <div>Here are your posts</div>
            <Posts />
          </>
        ) : (
          <div>loading</div>
        )}
      </div>
    );
  }
};

export default Homepage;
