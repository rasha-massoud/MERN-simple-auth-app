import { Container, Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Hero = () => {
    return (
        <div className='py-5'>
            <Container className='d-flex justify-content-center align-items-center'>
                <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
                    <h1 className='text-center mb-4'>
                        MERN Authentications
                    </h1>
                    <p className='text-center mb-4'>
                        This is a boilerplate that stores a JWT in an HTTP-Only cookie for MERN authentication. The Redux Toolkit and the React Bootstrap Library are also utilized.
                    </p>
                    <div className='d-flex'>
                        <LinkContainer to='/login'>
                            <Button variant='primary' className='me-3'>
                                Sign In
                            </Button>
                        </LinkContainer>
                        <LinkContainer to='/register'>
                            <Button variant='secondary' className='me-3'>
                                Sign Out
                            </Button>
                        </LinkContainer>
                    </div>
                </Card> 
            </Container>
        </div>
    )
}

export default Hero;