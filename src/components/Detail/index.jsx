import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCar } from "../../redux/actions/car";
import { updateCar } from "../../redux/actions/car";
import { getManufactures } from "../../redux/actions/manufacture";
import { getTransmission } from "../../redux/actions/transmission";

import { getTypes } from "../../redux/actions/type";

import { Form, Button, FloatingLabel, Row, Col } from "react-bootstrap";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { car } = useSelector((state) => state.car);

  const [model, setModel] = useState("");
  const [manufacture, setManufacture] = useState("");
  const [transmission, setTransmission] = useState("");
  const [type, setType] = useState("");
  const [rent_day, setRentDay] = useState("");
  const [year, setYear] = useState("");
  const [capacity, setCapacity] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const [allManufacture, setAllManufacture] = useState([]);
  const [allTransmission, setAllTransmission] = useState([]);
  const [allType, setAllType] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const manufactureData = useSelector(
    (state) => state.manufacture.manufactures
  );
  const transmissionData = useSelector(
    (state) => state.transmission.transmissions
  );

  const typeData = useSelector((state) => state.type.types);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      updateCar(
        navigate,
        setIsLoading,
        id,
        model,
        manufacture,
        transmission,
        type,
        rent_day,
        year,
        capacity,
        description,
        image
      )
    );
  };

  useEffect(() => {
    dispatch(getCar(navigate, id));
    dispatch(getManufactures());
    dispatch(getTypes());
    dispatch(getTransmission());
  }, [dispatch, id, navigate]);

  useEffect(() => {
    if (car) {
      setModel(car.model);
      setRentDay(car.rent_day);
      setYear(car.year);
      setCapacity(car.capacity);
      setDescription(car.description);
      setManufacture(car.manufacture.id);
      setType(car.type.id);
      setTransmission(car.transmission.id);
      setImage(car.image);
    }
  }, [car]);

  useEffect(() => {
    if (manufactureData.length > 0) {
      setAllManufacture(manufactureData);
    }
    if (transmissionData.length > 0) {
      setAllTransmission(transmissionData);
    }
    if (typeData.length > 0) {
      setAllType(typeData);
    }
  }, [manufactureData, transmissionData, typeData]);

  return (
    <Form onSubmit={onSubmit}>
      {!car ? (
        <>
          <h2>Loading...</h2>
        </>
      ) : (
        <>
          <Form.Group className="mb-3" controlId="Model">
            <Form.Control type="image" src={image} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Model">
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="manufacture">
            <Form.Label>Manufacture</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setManufacture(e.target.value)}
              required
            >
              <option>Select Manufacture...</option>

              {allManufacture.map((m) => (
                <option
                  key={m.id}
                  value={m.id}
                  selected={manufacture == m.id ? "selected" : null}
                >
                  {m.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="transmission">
            <Form.Label>Transmission</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setTransmission(e.target.value)}
              required
            >
              <option>Select Transmission...</option>
              {allTransmission.map((t) => (
                <option
                  key={t.id}
                  value={t.id}
                  selected={transmission == t.id ? "selected" : null}
                >
                  {t.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="type">
            <Form.Label>Type</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option>Select Type...</option>
              {allType.map((t) => (
                <option
                  key={t.id}
                  value={t.id}
                  selected={type == t.id ? "selected" : null}
                >
                  {t.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="rent_day">
            <Form.Label>Rent Day</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Rent Per-Day"
              value={rent_day}
              onChange={(e) => setRentDay(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="year">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="capacity">
            <Form.Label>Capacity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Capacity"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="image" className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Form.Group>

          <Form.Label>Description</Form.Label>
          <FloatingLabel controlId="floatingTextarea2" label="Description">
            <Form.Control
              as="textarea"
              placeholder="Enter Description"
              style={{ height: "100px" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FloatingLabel>
          <Row>
            <Col md={6}>
              <Form.Group className="text-center mt-3">
                <Button
                  variant="success"
                  type="submit"
                  className="w-100"
                  disabled={isLoading}
                >
                  {isLoading ? "Editting..." : "Edit"}
                </Button>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="text-center mt-3">
                <Button
                  variant="danger"
                  type="button"
                  className="w-100"
                  disabled={isLoading}
                  onClick={() => navigate("/")}
                >
                  Cancel
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </>
      )}
    </Form>
  );
};

export default Detail;
