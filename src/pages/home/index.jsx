import { Container, Row, Col, Button } from "react-bootstrap";
import CarCard from "../../components/Card";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCars } from "../../redux/actions/car";

export default function Home() {
  const dispatch = useDispatch();

  const { cars } = useSelector((state) => state.car);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <Container className="mt-5 mb-5">
      <div className="container-fluid">
        <Container>
          <HeaderCard />
          <Row className="mt-1 g-4 mb-5">
            {cars.length > 0 &&
              cars.map((car) => <CarCard key={car?.id} car={car} />)}
          </Row>
        </Container>
      </div>
    </Container>
  );
}

function HeaderCard() {
  return (
    <Row>
      <Col md={6}>
        <h3>List car</h3>
      </Col>
      <Col md={6} className="d-flex justify-content-end">
        <Button
          variant="outline-primary"
          className="d-flex align-items-center"
          style={{ backgroundColor: "blue", color: "white", fontWeight: 400 }}
          as={Link}
          to={"/addCar"}
        >
          <img src="Icons/icon_plus" alt="" /> Add New Car
        </Button>
      </Col>
    </Row>
  );
}
