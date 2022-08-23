import './App.css';
import HomePage from './Pages/HomePage/HomePage';

import { 
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";
import FaqPage from './Pages/FaqPage/FaqPage';
import HopManiaPage from './Pages/HopManiaPage/HopManiaPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import AttractionsPage from './Pages/AttractionsPage/AttractionsPage';
import RulesPage from './Pages/RulesPage/RulesPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/hop-mania" element={<HopManiaPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/atrakcje" element={<AttractionsPage />} />
        <Route path="/zasady" element={<RulesPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
