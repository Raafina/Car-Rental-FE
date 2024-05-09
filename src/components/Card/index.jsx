import { Row, Col, Card, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { deleteCar } from "../../redux/actions/car";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

export default function CarCard({ car }) {
  const [showModal, setShowModal] = useState(false);
  const [carId, setCarID] = useState(null);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Col md={4}>
        <Card className="flex-fill">
          <Card.Img
            src={car?.image}
            className="card-img-top p-4"
            alt="car sample"
          />
          <Card.Body className="d-flex flex-column">
            <p style={{ fontWeight: 500 }}>{car.model}</p>
            <h5 className="card-title">{car.rent_day}</h5>
            <p>Updated At {car.updatedAt}</p>

            <div className="mt-auto">
              <Row>
                <Col md={6} className="mt-2 d-flex">
                  <form className="flex-fill d-flex">
                    <Button
                      variant="danger"
                      className="flex-fill"
                      style={{ backgroundColor: "white", color: "red" }}
                      onClick={() => {
                        setCarID(car?.id);
                        handleShow();
                      }}
                    >
                      Delete
                    </Button>
                  </form>
                </Col>
                <Col md={6} className="mt-2 d-flex">
                  <Button
                    variant="success"
                    className="flex-fill"
                    style={{ backgroundColor: "#5cb85f" }}
                    as={Link}
                    to={`/cars/${car.id}`}
                  >
                    Edit
                  </Button>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <ModalBox close={handleClose} show={showModal} carId={carId} />
    </>
  );
}

CarCard.propTypes = {
  car: PropTypes.object,
};

function ModalBox({ close, show, carId, handleClose }) {
  const dispatch = useDispatch();

  const handleDeleteCar = async (e) => {
    e.preventDefault();
    dispatch(deleteCar(carId));
    handleClose();
  };

  return (
    <Modal onHide={close} centered show={show}>
      <Modal.Body className="text-center">
        <img
          src="../public/Image/img-BeepBeep.png"
          alt=""
          style={{ width: "200px", alignItems: "center" }}
        />
        <h4>Delete this car?</h4>
        <p>
          Once deleted, the data cannot be restored. Are you sure you want to
          delete?
        </p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="primary" onClick={handleDeleteCar}>
          Ya
        </Button>
        <Button variant="outline-primary" onClick={close}>
          Tidak
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
