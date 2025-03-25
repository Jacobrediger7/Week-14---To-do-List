// src/components/CreateUser.js
import React, { useState } from 'react'; // Import React and useState hook
import axios from 'axios'; // Import axios for making HTTP requests

function CreateUser() {
  const [name, setName] = useState(''); // State to manage the name input
  const [email, setEmail] = useState(''); // State to manage the email input

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    const newUser = { name, email }; // Create a new user object

    try {
      // Send POST request to create a new user in the API
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
      console.log(response.data); // Log the created user response
    } catch (error) {
      console.error('Error creating user:', error); // Handle errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /> {/* Input for name */}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> {/* Input for email */}
      <button type="submit">Create User</button> {/* Submit button */}
    </form>
  );
}

export default CreateUser; // Export CreateUser to use in the app
