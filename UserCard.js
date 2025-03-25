import React from 'react'; // Import React
import { Card } from 'react-bootstrap'; // Import Card component from Bootstrap

// A functional component that displays user data
function UserCard({ user }) {
  return (
    <Card style={{ width: '18rem' }}> {/* Card layout for each user */}
      <Card.Body>
        <Card.Title>{user.name}</Card.Title> {/* Display the user's name */}
        <Card.Text>{user.email}</Card.Text> {/* Display the user's email */}
      </Card.Body>
    </Card>
  );
}

export default UserCard; // Export UserCard to use in other components
