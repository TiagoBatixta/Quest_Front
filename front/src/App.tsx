import Home from "./pages/Home/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login/Login";

export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
