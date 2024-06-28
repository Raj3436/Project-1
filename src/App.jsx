import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {AuthProvider} from './Services/Context/Auth-Context';
import Home from './Pages/Login'; // Assuming Home is your login page
import Dashboard from './Pages/Dashboard';
import Product from './Pages/Product';
import User from './Pages/User';
import Sidebar from './Components/sidebar';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='app-container'>
          <Sidebar />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route
                path='/dashboard'
                element={
                  <PrivateRoute
                    allowedRoles={['admin', 'user']}
                    element={<Dashboard />}
                  />
                }
              />
              <Route
                path='/user'
                element={
                  <PrivateRoute allowedRoles={['admin']} element={<User />} />
                }
              />
              <Route
                path='/product'
                element={
                  <PrivateRoute allowedRoles={['user']} element={<Product />} />
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
