import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Home from './pages/Home';
import LoggedInRoutes from './routers/LoggedInRoutes';
import NotLoggedInRoutes from './routers/NotLoggedInRoutes';
function App() {
  return (
    <div>
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/" element={<Home />} exact />
        </Route>

        <Route path="/login" element={<Login />} exact />
      </Routes>
    </div>
  );
}

export default App;
