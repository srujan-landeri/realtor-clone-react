import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
export default function PrivateRoute() {
  const [loggedIn, setLoggedIn] = React.useState(true);

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}
