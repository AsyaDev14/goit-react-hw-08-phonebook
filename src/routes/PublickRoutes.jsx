import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const location = useLocation();
  if (isLoggedIn) {
    return <Navigate to={'/contacts'} />;
  }
  return children;
};