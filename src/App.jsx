import { useState, useEffect } from 'react';
import './App.css';
import UserData from './UserData.json'; // Import the JSON data

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Access the data property from the JSON
    setUsers(UserData.data); // Set users to the data array
  }, []);

  return (
    <div>
      <h1>User Card Application</h1>
      <div className='user-grid'>
        {users.map((user) => (
          <div key={user.id} className='user_card'>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className ="avatar" />
            <div className='user_info'>
              <h2>{user.first_name} {user.last_name}</h2>
              <p>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
