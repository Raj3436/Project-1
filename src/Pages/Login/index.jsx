import React, {useEffect} from 'react';
import {useAuth} from '../../Services/Context/Auth-Context';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const {login} = useAuth();
  const {isAuthenticated} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);
  const handleLogin = () => {
    login();
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
