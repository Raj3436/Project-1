import React, {createContext, useContext, useEffect, useState} from 'react';

const AuthContext = createContext();
const UserContext = createContext();
const authToken = 'TEMPORARY 1234567890987654321';

export const AuthProvider = ({children}) => {
  const getCookie = (name) => {
    return document.cookie.split('; ').reduce((r, v) => {
      const parts = v.split('=');
      return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
  };

  const [isAuthenticated, setIsAuthenticated] = useState(!!getCookie('token'));
  const [user, setUser] = useState(null);

  const setCookie = (name, value, days) => {
    const expires = new Date(
      Date.now() + days * 24 * 60 * 60 * 1000,
    ).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(
      value,
    )}; expires=${expires}; path=/`;
  };

  const login = () => {
    const userData = {username: 'exampleUser', role: 'admin'};
    setUser(userData);
    setCookie('token', authToken, 15);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    removeCookie('token');
    setIsAuthenticated(false);
  };

  const removeCookie = (name) => {
    document.cookie = `${name}=; Max-Age=-1; path=/`;
  };

  useEffect(() => {
    const token = getCookie('token');
    if (token && !user) {
      // Simulate fetching user data
      setUser({username: 'exampleUser', role: 'admin'}); // Replace with actual fetch logic
      setIsAuthenticated(true);
    } else if (!token) {
      setIsAuthenticated(false);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{isAuthenticated, login, logout}}>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useUser = () => {
  return useContext(UserContext);
};
