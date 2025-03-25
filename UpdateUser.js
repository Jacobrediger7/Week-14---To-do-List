// src/components/UpdateUser.js
import React, { useState } from 'react'; // Import React and useState hook
import axios from 'axios'; // Import axios for HTTP requests

function UpdateUser() {
  const [userId, setUserId] = useState(''); // State to manage user ID input
  const [name, setName] = useState(''); // State to manage name input

  const handleUpdate = async () => {
    const updatedUser = { name }; // Create an updated user object

    try {
      // Send PUT request to update user data
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, updatedUser);
      console.log(response.data); // Log the updated user response
    } catch (error) {
      console.error('Error updating user:', error); // Handle any errors
    }
  };

  return (
    <div>
      <input type="text" placeholder="User ID" onChange={(e) => setUserId(e.target.value)} /> {/* Input for user ID */}
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} /> {/* Input for new name */}
      <button onClick={handleUpdate}>Update User</button> {/* Button to trigger the update */}
    </div>
  );
}

export default UpdateUser; // Export UpdateUser to use in other components
