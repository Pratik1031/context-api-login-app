import { Card } from '@material-tailwind/react';
import React from 'react';

const Profile = () => {
  if (!showProfile) {
    return null;
  }
  return (
    <div className=' w-[500px] h-[500px] m-auto mt-10'>
      <h1 className='text-xl p-2 font-bold text-center'>Profile</h1>
      <Card className=' Profile-card m-auto p-4'>
        <p>
          UserName:{user.firstname}
          {user.lastname}
        </p>
        <p>Email:{user.email}</p>
        <p>City:{user.city}</p>
      </Card>
    </div>
  );
};

export default Profile;
