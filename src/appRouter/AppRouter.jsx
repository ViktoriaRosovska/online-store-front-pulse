import { Routes, Route } from 'react-router-dom';
import ManCatalog from "../layout/manCatalog/ManCatalog.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/api" element={<ManCatalog />} />
    </Routes>
  )
}

export default AppRouter