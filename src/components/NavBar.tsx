import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar: React.FC = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <Navbar>
            <Nav>
                <Nav.Link as={Link} to='/'> Login |</Nav.Link>
                {isAuthenticated &&
                <>
                    <Nav.Link as={Link} to='/dashboard'>Dashboard</Nav.Link>
                    <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                    <Nav.Link as={Link} to='/details/'>Task Details</Nav.Link>
                </>
                }
            </Nav>
        </Navbar>
    )
}

export default NavBar;

//current set up causes a reload and runs a redirect message, used ChatGPT to debug and update linking