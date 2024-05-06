import { Button, Form, FormGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    // login action (fetch api)
    dispatch(login(navigate, email, password, setIsLoading));
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <FormGroup className="text-center mt-3">
        <Button
          variant="primary"
          type="submit"
          className="w-100"
          disabled={isLoading}
        >
          {isLoading ? "Authentication..." : "Login"}
        </Button>
      </FormGroup>
      <p className="mt-3 text-center">
        Don't have an account yet?
        <Link as={Link} to="/register">
          Register
        </Link>
      </p>
    </Form>
  );
}
