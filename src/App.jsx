import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {AuthProvider} from './Services/Context/Auth-Context';
import Home from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Product from './Pages/Product';
import User from './Pages/User';
import Sidebar from './Components/sidebar';
import PrivateRoute from './PrivateRoute';
import Items from './items';
import ItemDetails from './item-details';
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
              <Route
                path='/items'
                element={
                  <PrivateRoute
                    allowedRoles={['user', 'admin']}
                    element={<Items />}
                  />
                }
              />
              <Route path='/items' element={<Items />} />
              <Route path='/items/:id' element={<ItemDetails />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
