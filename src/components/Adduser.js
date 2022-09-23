
import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
function AddUser(props){
  const [validated, setValidated] = useState(false);
  const [inputFields, setInputFields] = useState([
    { name: '', age: '' }
  ])
  const handleSubmit = event => {
    const target = event.target;
    event.preventDefault();
    alert(target.name)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }


 

 const  handleInputChange = (event)  =>{
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

  }

  
    return (
      // <form>
      //   <label>
      //     Is going:
      //     <input
      //       name="isGoing"
      //       type="checkbox"
      //       checked={this.state.isGoing}
      //       onChange={this.handleInputChange} />
      //   </label>
      //   <br />
      //   <label>
      //     Number of guests:
      //     <input
      //       name="numberOfGuests"
      //       type="number"
      //       value={this.state.numberOfGuests}
      //     onChange={this.handleInputChange} />
      //   </label>
         
      // </form>
      <Container>
           <Row>
           <Col></Col>
        <Col> <h1> Add New User</h1></Col>
        <Col></Col>
           </Row>
           <Row>
        <Col></Col>
        <Col>
      <form noValidate validated={validated} onSubmit={ handleSubmit}>
      <div className="form-group" required>
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      </div>
      <div className="form-group">
      <label htmlFor="FirstName">First Name</label>
      <input type="text" className="form-control" id="First_Name"  placeholder="Enter First Name"/>
      </div>
      <div className="form-group">
      <label htmlFor="LastName">Last Name</label>
      <input type="text" className="form-control" id="Last_Name"  placeholder="Enter Last Name"/>
      </div>
      <div className="form-group">
      <label htmlFor="Nationality">Nationality</label>
      <input type="text" className="form-control" id="Nationality"  placeholder="Enter Nationality"/>
      </div>
      <div className="form-group">
      <label htmlFor="Age">Age</label>
      <input type="text" className="form-control" id="Age"  placeholder="Enter Age"/>
      </div>
      <button type="submit" className="btn btn-primary btnconfig">Submit</button>

</form>
</Col>
<Col></Col>
</Row>
</Container>
      
    );
  
}

export default AddUser;

