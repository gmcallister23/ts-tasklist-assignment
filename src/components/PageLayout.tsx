import { Col, Container } from 'react-bootstrap';
import NavBar from '../components/NavBar';

type PageLayoutProps = {
    children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <Container>
            <h1>Task Management</h1>
            {children}
        </Container>
    );
};

export default PageLayout;