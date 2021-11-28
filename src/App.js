import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./component/Navbar";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
        <Route path="/discover" element={<DiscoverMoviesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
export default App;
