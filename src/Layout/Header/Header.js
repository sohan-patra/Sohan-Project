import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import './Header.css'


export default function Header() {
    let location = useLocation();
    const navigate1 = useNavigate();
    const isAuth = window.sessionStorage.getItem('Token Value:')
    useEffect(() => {
        console.log("Location :", location, "\nPathName :", location.pathname);
    }, [location]);
    const loggingOut = () => {
        window.sessionStorage.clear();
        alert("Yoy have successfully Loged Out :")
        navigate1('/loginpage')
    }
    return (
        <>
            <Navbar bg="primary" variant="dark" >
                <div className='headermid'>
                    <Container className='nav1'>


                        {/* <Navbar.Brand as={Link} to="/">Navber</Navbar.Brand> */}

                        <Nav className="me">
                            <img className='mylogo' src="../../../../Images/logo2.png" alt='logo' />
                            {/* <div className='links'> */}
                            <Nav.Link as={Link} to="/" className={`${location.pathname === "/" ? "active" : " "}`}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/shopcatpage" className={`${location.pathname === "/shopcatpage" ? "active" : " "}`}>Shoping</Nav.Link>
                            <Nav.Link as={Link} to="/doccatpage" className={`${location.pathname === "/doccatpage" ? "active" : " "}`}>Doctor</Nav.Link>

                            <Nav.Link as={Link} to="aboutpage" className={`${location.pathname === "/aboutpage" ? "active" : " "}`}>About Us</Nav.Link>
                            <Nav.Link as={Link} to="/contactpage" className={`${location.pathname === "/contactpage" ? "active" : " "}`}>Contact Us</Nav.Link>
                            <Nav.Link as={Link} to="/servicepage" className={`${location.pathname === "/servicepage" ? "active" : " "}`}>Services</Nav.Link>
                            {/* <Nav.Link as={Link} to="/registrationpage" className={`${location.pathname === "/registrationpage" ? "active" : " "}`}>Registration</Nav.Link>
                            <Nav.Link as={Link} to="/loginpage" className={`${location.pathname === "/loginpage" ? "active" : " "}`}>Login</Nav.Link> */}
                            {/* </div> */}
                            {
                                !isAuth ?
                                    <>
                                        <Nav.Link as={Link} to="/registrationpage" className={`${location.pathname === "/registrationpage" ? "active" : " "}`}>Registration</Nav.Link>
                                        <Nav.Link as={Link} to="/loginpage" className={`${location.pathname === "/loginpage" ? "active" : " "}`}>Login</Nav.Link>
                                    </>:
                                    <Button className='bt56' onClick={loggingOut}>LogOut</Button>
                            }
                            

                        </Nav>

                    </Container>
                </div>
            </Navbar>
        </>
    )
}
