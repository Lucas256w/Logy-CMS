import { useState, useContext } from "react";
import { UserContext } from "../../App";
import { loginAPI } from "../../api/apiFunctions";

const LoginForm = () => {
  const [info, setInfo] = useState({
    username: "",
    password: "",
  });
  const { setUser } = useContext(UserContext);

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await loginAPI(info);
      if (result.token) {
        localStorage.setItem("token", result.token);
        setUser({ username: result.username, id: result.id });
      }
    } catch (error) {
      console.error("Fetch failed: ", error);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              name="username"
              type="text"
              minLength={1}
              value={info.username}
              onChange={handleInfoChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              name="password"
              type="password"
              minLength={1}
              value={info.password}
              onChange={handleInfoChange}
            />
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
