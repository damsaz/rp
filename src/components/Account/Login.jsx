import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../../App.css";
import { ReactSession }  from 'react-client-session';
import { useCookies } from 'react-cookie';
import { Navigate } from "react-router-dom";
export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    function performValidation() {
    return username.length > 0 && password.length > 0;
    }
   
    
    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    
   
    function handleSubmit(event) {
       
        setCookie( "username",username,{ path: '/' });
        <Navigate to="/User" replace={true} />
       
      
    event.preventDefault();
    }
    return (
    <div className="w-100 p-4 d-flex justify-content-center pb-4">
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="username" >
    <Form.Label>Username</Form.Label>
    <Form.Control
    autoFocus
    type="text"
    value={username}
    onChange={e => setUsername(e.target.value)}
    />
    </Form.Group>
    <Form.Group controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control
    value={password}
    onChange={e => setPassword(e.target.value)}
    type="password"
    />
    </Form.Group>
    <Button disabled={!performValidation()} type="submit" className="btnconfig" >
    Login
    </Button>
    </Form>
    </div>
    );
    }