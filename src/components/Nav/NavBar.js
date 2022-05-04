import 'bootstrap/dist/css/bootstrap.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Component } from 'react';
import { signUp } from '../../utilities/users-service';




export default class NavBar extends Component {


  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
    show: false,
    login: false
  };

  handleShow = () => {
   this.setState({show: true})
   
  }

  handleClose = () => {
    this.setState({show: false})
  }

  handleLogin = () => {
    this.setState({login: true})
    
   }
 
   handleLoginClose = () => {
     this.setState({login: false})
   }

   handleChange = (evt) => {
    this.setState({...this.state, [evt.target.name]: evt.target.value, error: '' })
}


handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;
      delete formData.login; 
      delete formData.show; 
      const user = await signUp(formData)
      this.props.setUser(user)
    } catch (error) {
      this.setState({ error: 'Sign Up Failed'} )
    }
}
 


  render() {

    const disable = this.state.password !== this.state.confirm; 

    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Sneaker Forum</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link onClick={this.handleShow}> Sign Up </Nav.Link>
                <Nav.Link onClick={this.handleLogin} eventKey={2} >   Log In </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form autoComplete='off' onSubmit={this.handleSubmit} method="POST">
              <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={this.state.email} onChange={this.handleChange} name="email" autoFocus required />
              </Form.Group>
              <Form.Group className="mb-3"  >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} required />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange}  required />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange}  required />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
              </Form.Group>
               <Button type="submit" disabled={disable} variant="secondary">
              Submit
            </Button>
            </Form>
          </Modal.Body>
        </Modal>



          <Modal show={this.state.login} onHide={this.handleLoginClose}>
          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form autoComplete='off' onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={this.state.email} onChange={this.handleChange} name="email" autoFocus required />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange}  required />
              </Form.Group> 
              <Button type="submit" disabled={disable} variant="secondary">
              Submit</Button>
            </Form>
          </Modal.Body>
        </Modal>

      </>
    )

  }

}


