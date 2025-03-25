// src/components/DeleteUser.js
import React, { useState } from 'react'; // Import React and useState hook
import axios from 'axios'; // Import axios for HTTP requests

function DeleteUser() {
  const [userId, setUserId] = useState(''); // State for user ID input

  const handleDelete = async () => {
    try {
      // Send DELETE request to remove a user from the API
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
      console.log(response.data); // Log the response of the deleted user
    } catch (error) {
      console.error('Error deleting user:', error); // Handle errors
    }
  };

  return (
    <div>
      <input type="text" placeholder="User ID" onChange={(e) => setUserId(e.target.value)} /> {/* Input for user ID */}
      <button onClick={handleDelete}>Delete User</button> {/* Button to trigger deletion */}
    </div>
  );
}

export default DeleteUser; // Export DeleteUser to use in the app
