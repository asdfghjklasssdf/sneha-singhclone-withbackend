import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Profile = ({ history }) => {
  const handleLogout = async () => {
    try {
      const response = await axios.post('/logout');
      window.alert('Logout successful:', response.data);
      history.push('/login'); 
    } catch (err) {
    
    }
  };
  return (
    <Container>
        <Container>
      <h2>Hi Learner!</h2>
      <p>Hope we are able to contribute to your knowledge.</p>
      <ul>
        <li>Mail us your suggestions</li>
        <li>Rate us 5 Star on Play Store</li>
        <li>Check out our other Apps</li>
      </ul>
      <Button variant="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
      <div style={{ marginTop: '20px' }}>
        <p>Do you want to...</p>
        <Link to="/Register">
          <Button>Sign Up</Button>
        </Link>
        <Link to="/login">
          <Button>Log In</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Profile;
