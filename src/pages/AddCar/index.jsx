import AddCarComponent from "../../components/AddCar";
import { Row, Col, Card } from "react-bootstrap";

const Register = () => {
  return (
    <Row className="d-flex justify-content-center align-items-center mt-5 mb-5">
      <Col md={3}>
        <Card>
          <Card.Header>Add Car</Card.Header>
          <Card.Body>
            <AddCarComponent />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
