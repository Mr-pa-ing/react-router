import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth/auth';

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/');
  }

  return (
    <div>
      Welcome to {auth.user} !
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile;