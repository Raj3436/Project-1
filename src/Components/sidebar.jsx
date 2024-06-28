import React from 'react';
import {BsBox, BsGear, BsHouseDoor, BsPerson} from 'react-icons/bs';
import {Link, useLocation} from 'react-router-dom';
import {useUser} from '../Services/Context/Auth-Context';

const Sidebar = () => {
  const user = useUser();
  // const {logout} = useAuth();
  console.log(user);
  const location = useLocation();
  // logout();

  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <h3>SRT Infotech</h3>
      </div>
      <ul className='sidebar-menu'>
        <SidebarItem
          icon={<BsHouseDoor />}
          to='/'
          text='Dashboard'
          currentPath={location.pathname}
        />
        {user?.role === 'admin' && (
          <SidebarItem
            icon={<BsPerson />}
            to='/user'
            text='User'
            currentPath={location.pathname}
          />
        )}
        {user?.role === 'user' && (
          <SidebarItem
            icon={<BsBox />}
            to='/product'
            text='Product'
            currentPath={location.pathname}
          />
        )}
        <SidebarItem
          icon={<BsGear />}
          to='/settings'
          text='Settings'
          currentPath={location.pathname}
        />
      </ul>
    </div>
  );
};

const SidebarItem = ({icon, to, text, currentPath}) => {
  const isActive = currentPath === to;

  return (
    <li>
      <Link to={to} className={`sidebar-link ${isActive ? 'active' : ''}`}>
        {icon && <span className='sidebar-icon'>{icon}</span>}
        <span className='sidebar-text'>{text}</span>
      </Link>
    </li>
  );
};

export default Sidebar;
