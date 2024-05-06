import { useEffect } from "react";
import { NavDropdown, Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, logout } from "../../redux/actions/auth";

export default function NavbarForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProfile(null, null, null));
  }, [dispatch, token]);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Binar Car Rental
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <NavDropdown title={user.name} id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to={"/profile"}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    dispatch(logout());
                    navigate("/login");
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} to="/login"></Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
