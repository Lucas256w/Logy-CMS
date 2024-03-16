import { useEffect, useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import Login from "./pages/Login";
import { reloginAPI } from "./api/apiFunctions";

export const UserContext = createContext({
  user: {},
  setUser: () => {},
});

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const relogin = async () => {
      const token = localStorage.getItem("token");

      try {
        const result = await reloginAPI(token);
        if (result.username) {
          setUser({ username: result.username, id: result.id });
        }
      } catch (error) {
        console.error("fetch failed: ", error);
      } finally {
        setLoading(false);
      }
    };
    relogin();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {user ? (
        <UserContext.Provider value={{ user, setUser }}>
          <Outlet />
        </UserContext.Provider>
      ) : (
        <UserContext.Provider value={{ user, setUser }}>
          <Login setUser={setUser} />
        </UserContext.Provider>
      )}
    </>
  );
}

export default App;
