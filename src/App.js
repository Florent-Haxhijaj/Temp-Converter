import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Average from './components/Average';
import Temperature from './components/Temperature';
import Velocity from './components/Velocity';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Average />} />
        <Route path="/Temperature" element={<Temperature />} />
        <Route path="/Velocity" element={<Velocity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
