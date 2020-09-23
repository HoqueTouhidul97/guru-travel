import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { userContext } from '../../App';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../images/Logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    const {loggedUser} = useContext(userContext);
    const[loggedInUser,setLoggedInUser] = loggedUser;
    return (
        <div>
            <Container>
                <Navbar className="navbar" expand="lg">
                <Navbar.Brand href="/home"><img className="brand" src={Logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                    <FormControl  type="text" placeholder="Search" className="mr-sm-2">

                    </FormControl>

                </Form>
                <Nav className="ml-auto">
                    <Link className="text-white mr-4" to="/home">News</Link>
                    <Link className="text-white mr-4" to="/destination">Destination</Link>
                    <Link className="text-white mr-4" to="/blog">Blog</Link>
                    <Link className="text-white mr-4" to="/contact">Contact</Link>
                    {
                        
                        loggedInUser.name ?<Link className="text-white mr-4">{loggedInUser.name}</Link> 
                        :<Link to="/login"> <Button variant="warning">Login</Button> </Link>
                    }

                </Nav>
                </Navbar.Collapse>
               </Navbar>
            </Container>
            
        </div>
    );
};

export default Header;