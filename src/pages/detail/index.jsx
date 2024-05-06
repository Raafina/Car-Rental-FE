import DetailComponent from "../../components/Detail";
import { Row, Col, Card } from "react-bootstrap";

const Login = () => {
  return (
    <Row className="d-flex justify-content-center align-items-center mt-5 mb-5">
      <Col md={3}>
        <Card>
          <Card.Header>Edit</Card.Header>
          <Card.Body>
            <DetailComponent />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
