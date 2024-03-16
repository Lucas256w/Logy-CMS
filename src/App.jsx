import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { reloginAPI } from "./api/apiFunctions";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const relogin = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
      }

      try {
        const result = await reloginAPI(token);
        if (result.username) {
          setUser({ username: result.username, id: result.id });
        }
      } catch (error) {
        console.error("fetch failed: ", error);
        navigate("/login");
      }
    };
    relogin();
  }, [navigate]);

  return (
    <>
      <Outlet context={{ user, setUser }} />
    </>
  );
}

export default App;
