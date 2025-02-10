import { Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/Home";
import PublicLayout from "./Layouts/PublicLayout";
import MovieDetails from "./pages/MovieDetails";
import Explore from "./pages/Explore";
import Favorites from "./pages/Favourite";
import Mood from "./pages/mood";
import ScrollTop from "./Helpers/ScrollTop";

function App() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path=":explore/:movieID" element={<MovieDetails />} />
          <Route path=":explore" element={<ConditionalExplore />} />
        </Route>
      </Routes>
    </>
  );
}

function ConditionalExplore() {
  const { explore } = useParams();

  return explore === "favorites" ? (
    <Favorites />
  ) : explore === "mood" ? (
    <Mood />
  ) : (
    <Explore />
  );
}

export default App;
