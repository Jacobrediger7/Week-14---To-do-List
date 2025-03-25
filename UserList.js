import React, { useEffect, useState } from 'react'; // Import React and hooks (useEffect, useState)
import axios from 'axios'; // Import axios for making API requests
import UserCard from './UserCard'; // Import UserCard component to display each user

function UserList() {
  const [users, setUsers] = useState([]); // useState to hold the list of users

  // useEffect to fetch data from API when the component is mounted
  useEffect(() => {
    // Make an API GET request using axios
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data); // Store fetched user data into state
      })
      .catch(error => {
        console.log(error); // Handle any errors
      });
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div>
      {/* Map through the users and display a UserCard for each one */}
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList; // Export UserList to be used in App.js or other components
