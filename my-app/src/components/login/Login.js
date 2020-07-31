import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import MessageError from './MessageError'
import "./Login.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableMessageError, setEnableMessageError] = useState(false);
  const history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
 
  function handleSubmit(event) {
    if (email === 'nguyenhao199388@gmail.com' && password === '123') {
      setEnableMessageError(false);
      history.push("/home");
    } else {
      setEnableMessageError(true);
    }
    //event.preventDefault();
  }

  return (
    <div className="Login">
      <form>
        <FormGroup controlId="email" bsSize="large">
          <h3>Email</h3>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <h3>Password</h3>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        {enableMessageError&&<MessageError/>}
        <Button block bsSize="large" disabled={!validateForm()} onClick={handleSubmit}>
          Login
        </Button>
      </form>
    </div>
  );
}