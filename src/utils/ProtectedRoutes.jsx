import { Navigate, useLocation } from 'react-router-dom';

// Assuming you have a function to check if the user is authenticated, and it returns true or false.
const isUserAuthenticated = () => {
  // Your logic to check if the user is authenticated (e.g., check for a token in localStorage)
  // Return true if authenticated, false otherwise.
  const token = localStorage.getItem('token');
  return !!token;
};

// Create a wrapper component for protected routes
export const ProtectedRoute = ({ element }) => {
  const location = useLocation();

  // If the user is authenticated, render the provided element (component)
  if (isUserAuthenticated()) {
    return element;
  }

  // If the user is not authenticated, redirect to the login page and preserve the intended route in the URL for later redirection after login.
  return (
    <Navigate
      to={{
        pathname: '/login',
        state: { from: location }, // Preserve the intended route in the state for redirection after login.
      }}
    />
  );
};