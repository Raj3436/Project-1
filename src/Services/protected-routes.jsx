import {Navigate} from 'react-router-dom';
import {useAuth} from './Context/Auth-Context';

const ProtectedRoute = ({component}) => {
  const {isAuthenticated} = useAuth();

  return isAuthenticated ? component : <Navigate to='/' />;
};

export default ProtectedRoute;
