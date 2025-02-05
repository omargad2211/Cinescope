import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PublicLayout from "./Layouts/PublicLayout";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:movieID" element={<MovieDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
