import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';

type AuthenticationGuardProps = {
    //component: React.ReactNode | any;
    component: React.ComponentType<any>;
}

const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({component})=>{
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => <div>Redirecting you to the login page... </div>,

    })

    return (
        <Component />
    )
}

export default AuthenticationGuard;

//copied this into Chat to check it for errors, it added a suggestion to create cleaner type:

//React.ComponentType<any> --> this tells TypeScript that component is a React component, not just a React node.