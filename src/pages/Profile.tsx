import { useAuth0 } from '@auth0/auth0-react';
import PageLayout  from '../components/PageLayout';
import { Col } from 'react-bootstrap';
import { useEffect } from 'react';


const ProfilePage: React.FC = () => {
    const { user, isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();

    useEffect(() => {
        const getToken = async () => {
            try { 
                const token = await getAccessTokenSilently();
                console.log('token', token);
            } catch (e) {
                console.error(e);
            }
        };
        if (isAuthenticated) {
            getToken();
        } 
    }, [getAccessTokenSilently, isAuthenticated])
    //getAccess TokenSilently().then(token => console.log('token', token))
    
    if(isLoading) return <div>Loading...</div>

    if(!isAuthenticated) {
        return <div>Not Authenticated</div>
    }

    if(!user){
        return <div>No user profile</div>
    }

    return(
        <PageLayout>
            <h2>Profile Page</h2>
            <Col>
                {user?.picture && <img src={user.picture} alt={user.name} />}
                <h3>{user.name}</h3>
                <div>
                    {
                        Object.keys(user).map((objKey, index) => 
                        <p key={index}><b>{objKey}</b>: {user[objKey]}</p>
                        )
                    }
                </div>
            </Col>
        </PageLayout>
    )
}

export default ProfilePage;

//getAccessTokenSilently().then(token => console.log('token', token)) --> This will run everytime the component renders, can lead to performance issues or other bugs;
//fix to useEffect --> This was debugged with ChatGPT