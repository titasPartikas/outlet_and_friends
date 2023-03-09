import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const authenticate = () => {
    setIsAuthenticated(true);
    navigate("/app/catalog");
  };
  const logOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              authenticate={authenticate}
              logOut={logOut}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/app"
          element={<ProtectedRoutes isAuthenticated={isAuthenticated} />}
        >
          <Route path="/app/admin" element={<h1>admin panel</h1>} />
          <Route path="/app/catalog" element={<h1>catalog</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
