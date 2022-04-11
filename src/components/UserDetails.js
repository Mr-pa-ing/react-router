import React from 'react'
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const param = useParams();
  const userId = param.userId;
  return (
    <div>
      <h2>Details about User {userId}</h2>
    </div>
  )
}

export default UserDetails;