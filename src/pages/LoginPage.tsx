import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../components/LoginButton';
import Home from '../pages/Home';

const LoginPage = () => {

    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <div>Loading...</div>

    if (isAuthenticated) {
        return <Home />
    }
    return (
        <div>
            <h1>Welcome to Task Management</h1>
            <p>Select either login or sign up to access your task list</p>
            <LoginButton />
        </div>
    );
};

export default LoginPage;

//ChatGPT helped me format this