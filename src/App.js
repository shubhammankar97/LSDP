import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/home/Home';
import GetInvolved from './components/getinvolved/GetInvolved';
import Faq from './components/faq/FAQ';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/involved" element={<GetInvolved />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
