import { Routes, Route } from 'react-router-dom';
import ManCatalog from "../layout/manCatalog/ManCatalog.js";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/api" element={<ManCatalog />} />
    </Routes>
  )
}

export default AppRouter