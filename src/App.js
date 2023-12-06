import React, { useState } from 'react';
import UserDetails from './components/UserDetails';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import './App.css';
 
const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repositories, setRepositories] = useState([]);

  const resetState = () => {
    setUsername('');
    setUserData(null);
    setRepositories([]);
  };

  const handleSubmit = () => {
    if (username) {
      // Fetch user details
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error('Error fetching user details:', error));

      // Fetch user repositories
      fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => response.json())
        .then((data) => setRepositories(data))
        .catch((error) => console.error('Error fetching repositories:', error));
    }
  };

  return (
    <div className='App'>
      {!userData ? (
        <Container  className="d-flex align-items-center  
        justify-content-center vh-100">
          <h1>
            Enter GitHub Username:
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          <Button variant="dark" onClick={handleSubmit} >Submit</Button>
          
          </h1>
        </Container>
      ) : (
        <UserDetails
          avatarUrl={userData.avatar_url}
          username={userData.name}
          location={userData.location}
          bio={userData.bio}
          repositories={repositories}
          onReset={resetState}
        />
      )}
    </div>
  );
};



export default App;
