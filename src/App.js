
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import Header from './Components/header/Header';
// import Navbar from './Components/navbar/Navbar';
import List from './Pages/list/List';
import Home from './Pages/home/Home';
import Hotel from './Pages/hotel/Hotel';

// import Home from './Pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
      

      
  
  );
}

export default App;
