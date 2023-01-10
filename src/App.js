import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Master from "./components/Master";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const logoutUser = () => {
    localStorage.setItem("loggedUser", null);
    setCurrentUser(null);
  };

  const loginUser = (user) => {
    localStorage.setItem("loggedUser", JSON.stringify(user));
    setCurrentUser({ ...user });
  };

  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser");
    if (loggedUser) {
      const curr = JSON.parse(localStorage.getItem("loggedUser"));
      setCurrentUser(curr);
    }
  }, []);

  return (
    <div className="App">
      <Navbar currentUser={currentUser} logoutUser={logoutUser} />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute currentUser={currentUser}>
              <Master />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login loginUser={loginUser} />} />
        <Route path="/register" element={<Register loginUser={loginUser} />} />
      </Routes>
    </div>
  );
}

export default App;
