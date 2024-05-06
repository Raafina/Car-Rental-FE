import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCar } from "../../redux/actions/car";
import { getManufactures } from "../../redux/actions/manufacture";
import { getTransmission } from "../../redux/actions/transmission";
import { getTypes } from "../../redux/actions/type";

export default function AddCarForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [model, setModel] = useState("");
  const [manufacture, setManufacture] = useState("");
  const [transmission, setTransmission] = useState("");

  const [type, setType] = useState("");
  const [rent_day, setRentDay] = useState("");
  const [year, setYear] = useState("");
  const [capacity, setCapacity] = useState("");
  const [image, setImage] = useState();
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

  useEffect(() => {
    // get all data
    dispatch(getManufactures());
    dispatch(getTransmission());
    dispatch(getTypes());
  }, [dispatch]);

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

  const onSubmit = async (e) => {
    e.preventDefault();
    //dispatch the addCar action
    dispatch(
      addCar(
        navigate,
        setIsLoading,
        model,
        manufacture,
        transmission,
        type,
        rent_day,
        year,
        capacity,
        image,
        description
      )
    );
  };

  return (
    <Form onSubmit={onSubmit}>
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
          value={manufacture}
          onChange={(e) => setManufacture(e.target.value)}
          required
        >
          <option>Select Manufacture...</option>
          {allManufacture.map((manufacture) => (
            <option key={manufacture.id} value={manufacture.id}>
              {manufacture.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="transmission">
        <Form.Label>Transmission</Form.Label>
        <Form.Control
          as="select"
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
          required
        >
          <option>Select Transmission...</option>
          {allTransmission.map((transmission) => (
            <option key={transmission.id} value={transmission.id}>
              {transmission.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="type">
        <Form.Label>Type</Form.Label>
        <Form.Control
          as="select"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        >
          <option>Select Type...</option>
          {allType.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
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

      <Form.Group className="text-center mt-3">
        <Button
          variant="primary"
          type="submit"
          className="w-100"
          disabled={isLoading}
        >
          {isLoading ? "Adding..." : "Add"}
        </Button>
      </Form.Group>
    </Form>
  );
}
