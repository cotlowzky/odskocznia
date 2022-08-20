import './App.css';
import HomePage from './Pages/HomePage/HomePage';

import { 
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";
import FaqPage from './Pages/FaqPage/FaqPage';
import HopManiaPage from './Pages/HopManiaPage/HopManiaPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/hop-mania" element={<HopManiaPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
