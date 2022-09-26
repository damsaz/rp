import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Add2({addPerson}) {
     const [personInfo, setpersonInfo] = useState({
      FirstName:"",
      SecondName:"", 
      Age:"", 
      Nationality:"", 
      EmailAdress:""
  });
  
  
  const [validated, setValidated] = useState();
 
  const handleSubmit = (event) => {
    const form = event.currentTarget;
  
       
    personInfo.FirstName =event.target[0].value;
    personInfo.SecondName=event.target[1].value;
    personInfo.Age=event.target[2].value;
    personInfo.Nationality=event.target[3].value;
    personInfo.EmailAdress=event.target[4].value;
    
    setpersonInfo({ ...personInfo});
    addPerson([personInfo]);
        
    
        
     //   setValidated(true);

        
   
   
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
      <Col></Col>
      <Col>
        <Form.Group as={Row}  controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name="Firstname"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Row}  controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            name="LastName"
          
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Row}  controlId="validationCustomAge">
          <Form.Label>Age</Form.Label>
          
           
            <Form.Control
              type="text"
              placeholder="Age"
              name="Age"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a Age.
            </Form.Control.Feedback>
          
        </Form.Group>
      
        <Form.Group as={Row}  controlId="validationCustom03">
          <Form.Label>Nationality</Form.Label>
          <Form.Control type="text" placeholder="Nationality" required name="Nationality" />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Nationality.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Row}  controlId="validationCustom04">
          <Form.Label>EmailAdress</Form.Label>
          <Form.Control type="text" placeholder="EmailAdress" required name="EmailAdress" />
          <Form.Control.Feedback type="invalid">
            Please provide a valid EmailAdress.
          </Form.Control.Feedback>
        
        </Form.Group>
      
 
      <Button type="submit">Submit form</Button>
      </Col>
      <Col></Col>
      </Row>
    </Form>
    
  );
}

export default Add2;