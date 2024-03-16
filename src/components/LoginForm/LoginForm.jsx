import { useState } from "react";
import { loginAPI } from "../../api/apiFunctions";
import styles from "./LoginForm.module.css";
import { useOutletContext, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { setUser } = useOutletContext();
  const [info, setInfo] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

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
        navigate("/");
      }
    } catch (error) {
      console.error("Fetch failed: ", error);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.formContainer}>
        <form onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username: </label>
            <input
              name="username"
              type="text"
              minLength={1}
              value={info.username}
              onChange={handleInfoChange}
            />
          </div>
          <div className={styles.formGroup}>
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
