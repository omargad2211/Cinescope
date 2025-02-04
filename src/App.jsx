import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PublicLayout from "./Layouts/PublicLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
