import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const NavBar: React.FC = () => {
    const { isAuthenticated, logout: auth0logout } = useAuth0();

    const logout = () => 
        auth0logout({
            logoutParams: {
                returnTo: window.location.origin
            }
        })

    return (
        <Navbar className="shadow-sm p3 mb-5 bg-body-tertiary rounded-bottom">
            <Nav>
                <Nav.Link as={Link} to='/'> Home |</Nav.Link>
                {isAuthenticated &&
                <>
                    <Nav.Link as={Link} to='/dashboard'>Dashboard</Nav.Link>
                    <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                    <Nav.Link as={Link} to='/details/'>Task Details</Nav.Link>
                    <Button onClick={(logout)}>Logout</Button>
                </>
                }
            </Nav>
        </Navbar>
    )
}

export default NavBar;

//current set up causes a reload and runs a redirect message, used ChatGPT to debug and update linking