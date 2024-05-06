import { Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../../redux/actions/auth";

export default function Profile() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    // get profile
    dispatch(getProfile(null, null, null));
  }, [dispatch]);

  return (
    <Form>
      {!user ? (
        <>
          <h2>Loading...</h2>
        </>
      ) : (
        <>
          {user?.photo && (
            <Image src={user?.photo} className="img-fluid" rounded />
          )}

          <div className={user?.photo && "mt-4"}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={user?.name} disabled />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={user?.email} disabled />
            </Form.Group>
          </div>
        </>
      )}
    </Form>
  );
}
