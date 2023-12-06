
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const UserDetails = ({ avatarUrl, username, location, bio, repositories, onReset }) => {
  return (
    

<div className="d-flex align-items-center  
                        justify-content-center vh-100"> 
    <Card className="text-center" style={{ width: '18rem' }}>
    <Card.Img variant="top"  src={avatarUrl}  alt="User Avatar" />
    <Card.Body>
      <Card.Title>{username}</Card.Title>
      <Card.Text>
          <strong>Location:</strong>
          <p>{location}</p>

          <strong>Bio:</strong>
          <p>{bio}</p>
        
      </Card.Text>
      <Button variant="primary" onClick={onReset}>Reset</Button>
    </Card.Body>
  </Card>
</div>

  );
};


export default UserDetails;
