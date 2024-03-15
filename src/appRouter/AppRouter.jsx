import { Routes, Route } from "react-router-dom";
import MaleCatalog from "../layout/maleCatalog/MaleCatalog.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/api" element={<MaleCatalog />} />
    </Routes>
  );
};

export default AppRouter;
