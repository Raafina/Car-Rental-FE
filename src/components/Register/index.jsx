import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  return (
    //<Form onSubmit={onSubmit}>
    <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          //value={name}
          //onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address *</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          //value={email}
          //onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password *</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          //value={password}
          //onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password *</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          //value={confirmPassword}
          //onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="photo" className="mb-3">
        <Form.Label>Photo</Form.Label>
        <Form.Control
          type="file"
          //onChange={(e) => setPhoto(e.target.files[0])}
        />
      </Form.Group>

      {/* <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? "Processing..." : "Register"}
      </Button> */}
      <Form.Group className="text-center mt-3">
        <Button variant="primary" type="submit" className="w-100">
          Register
        </Button>
      </Form.Group>
      <p className="mt-3 text-center">
        Already have account?
        <Link as={Link} to="/login">
          Login
        </Link>
      </p>
    </Form>
  );
}
