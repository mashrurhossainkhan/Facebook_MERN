import './style.css';
import LoginForm from '../../components/login/LoginForm';
import Footer from '../../components/login/Footer';
import RegisterForm from '../../components/login/RegisterForm';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Login() {
  const [visible, setVisible] = useState(false);
  const [cookies, setCookies] = useState(Cookies.get('user'));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies != null) {
      dispatch({ type: 'LOGIN', payload: JSON.parse(cookies) });
      navigate('/');
    }
  });
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm setVisible={setVisible} />
        {visible && <RegisterForm setVisible={setVisible} />}
        {/*The expression before the && operator (visible) is evaluated first. If visible is true, then the right-hand side of the && operator (<RegisterForm setVisible={setVisible} />) is returned and rendered.*/}
        <Footer />
      </div>
    </div>
  );
}
