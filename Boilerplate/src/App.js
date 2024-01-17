import { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Profile from './Components/Profile';
import { UserContext } from './Context/UserContext';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState(null);

  const updateUser = (userData) => {
    setUser(userData);
  };

  const updateShowProfile = (value) => {
    setShowProfile(value);
  };

  return (
    <UserContext value={{ user, updateUser, showProfile, updateShowProfile }}>
      <div className='App'>
        {showProfile ? <Profile /> : <Login setShowProfile={setShowProfile} />}
      </div>
    </UserContext>
  );
}

export default App;
