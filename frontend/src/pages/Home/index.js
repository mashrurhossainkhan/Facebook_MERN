import './style.css';
import Header from '../../components/header';
import { useDispatch, useSelector } from 'react-redux';
import LeftHome from '../../components/home/left';
import RightHome from '../../components/home/right';
import Stories from '../../components/home/stories';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import CreatePost from '../../components/createPost';

export default function Home() {
  const { user } = useSelector((user) => ({ ...user }));
  const [cookies, setCookies] = useState(Cookies.get('user'));
  const dispatch = useDispatch();
  useEffect(() => {
    if (cookies != null && user != null) {
      dispatch({ type: 'LOGIN', payload: JSON.parse(cookies) });
    }
  });
  return (
    <div className="home">
      <Header />
      <LeftHome user={user} />
      <div className="home_middle">
        <Stories />
        <CreatePost user={user} />
      </div>
      <RightHome user={user} />
    </div>
  );
}
