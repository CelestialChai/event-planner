import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import { Modal, Button, Form, Checkbox } from 'react-bootstrap'; // Import Bootstrap components

const LoginModal = () => {
  const [show, setShow] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username: ", username);
    console.log("Password: ", password);
    console.log("Remember Me: ", rememberMe);
    handleClose(); // Close the modal on submit
  };

  return (
    <div className="container">
      <h2>Modal Login Example</h2>
      <Button variant="primary" size="lg" onClick={handleShow}>
        Login
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="glyphicon glyphicon-lock"></span> Login
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <span className="glyphicon glyphicon-user"></span> Username
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                <span className="glyphicon glyphicon-eye-open"></span> Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Check
              type="checkbox"
              label="Remember me"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />

            <Button variant="success" type="submit" block>
              <span className="glyphicon glyphicon-off"></span> Login
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            <span className="glyphicon glyphicon-remove"></span> Cancel
          </Button>
          <p>
            Not a member? <a href="#">Sign Up</a>
          </p>
          <p>
            Forgot <a href="#">Password?</a>
          </p>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LoginModal;
import React from 'react';
import LoginModal from './LoginModal'; // Adjust path as needed

const App = () => {
  return (
    <div className="App">
      <LoginModal />
    </div>
  );
};

export default App;
import React from 'react';
import LoginModal from './LoginModal'; // Adjust path as needed

const App = () => {
  return (
    <div className="App">
      <LoginModal />
    </div>
  );
};

export default Ap