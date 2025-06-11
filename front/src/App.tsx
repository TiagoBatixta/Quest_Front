import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Recover from './pages/Recover/Recover';
import Store from './pages/Store/Store';
import PlayerHub from './pages/PlayerHub/PlayerHub';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover" element={<Recover />} />
        <Route path="/store" element={<Store />} />
        <Route path="/playerHub" element={<PlayerHub />} />
      </Routes>
    </BrowserRouter>
  );
}
