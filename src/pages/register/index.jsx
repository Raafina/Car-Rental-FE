import RegisterComponent from "../../components/Register";
import { Row, Col, Card } from "react-bootstrap";

const Register = () => {
  return (
    <Row className="d-flex justify-content-center align-items-center mt-5 mb-5">
      <Col md={3}>
        <Card>
          <Card.Header>Register</Card.Header>
          <Card.Body>
            <RegisterComponent />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
