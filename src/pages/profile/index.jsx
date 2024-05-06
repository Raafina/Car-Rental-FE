import ProfileComponent from "../../components/Profile";
import { Row, Col, Card } from "react-bootstrap";

const Profile = () => {
  return (
    <Row className="d-flex justify-content-center align-items-center mt-5 mb-5">
      <Col md={3}>
        <Card>
          <Card.Header>My Profile</Card.Header>
          <Card.Body>
            <ProfileComponent />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Profile;
