import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { AuthContext } from "./context/AuthContext"; // in curly bracets, since its imported as default
import { MoviesContext } from "./context/MoviesContext"; // in curly bracets, since its imported as default
import { userObserver } from "./firebase";

import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
        <MoviesContext.Provider value={{ movies, setMovies }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/details/:movieId" element={<MovieDetails />} />
          </Routes>
        </MoviesContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
