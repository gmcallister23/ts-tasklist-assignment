import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import Dashboard from '../pages/Dashboard';

const LoginButton: React.FC = () => {
    const { loginWithRedirect: login, isAuthenticated, isLoading, error, logout: auth0logout, user } = useAuth0();

    const signup = () =>
        login({
            authorizationParams: { screen_hint: 'signup'}
        });
    
    const logout = () => 
        auth0logout({
            logoutParams: {
                returnTo: window.location.origin
            }
        })

    const handleLogin = () => login();

    
    if (isLoading) return "Loading...";

    return isAuthenticated ? (
        <>
        {/* <p>Logged in as {user?.email}</p>

        <h1> User Profile </h1>
        
        <pre>{JSON.stringify(user, null, 2)}</pre> */}
       
        <Dashboard />

        <Button onClick={logout}>Logout</Button>

        </>
    ) : (

        <>
        {error && <p>Error: {error.message}</p>}

        <Button onClick={signup}>Sign Up</Button>

        <Button onClick={(handleLogin)}>Login</Button>
        </>
    )

};

export default LoginButton;

//copied from Auth0 registered application, debugged and updated with ChatGPT