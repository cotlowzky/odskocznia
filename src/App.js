import './App.css';
import HomePage from './Pages/HomePage/HomePage';

import { 
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";
import FaqPage from './Pages/FaqPage/FaqPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
