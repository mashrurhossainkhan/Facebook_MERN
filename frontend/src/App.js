import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Home from './pages/Home';
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} exact />
      <Route path="/profile" element={<Profile />} exact />
      <Route path="/" element={<Home />} exact />
    </Routes>
  );
}

export default App;
