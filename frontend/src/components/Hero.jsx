import { Container, Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../slices/usersApiSlice'
import { clearCredentials } from '../slices/authSlice'

const Hero = () => {

    const { userInfo } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const [ logoutApiCall ] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(clearCredentials());
            navigate('/');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='py-5'>
            <Container className='d-flex justify-content-center align-items-center'>
                <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
                    { userInfo ? (
                        <>
                            <h1 className='text-center mb-4'>
                                Hello {userInfo.name}
                            </h1>
                            <p className='text-center mb-4'>
                                You are currently logged in. This is a boilerplate that stores a JWT in an HTTP-Only cookie for MERN authentication. The Redux Toolkit and the React Bootstrap Library are also utilized.
                            </p>
                            <div className='d-flex'>
                                <LinkContainer to='/profile'>
                                    <Button variant='primary' className='me-3'>
                                        Profile
                                    </Button>
                                </LinkContainer>
                                <LinkContainer to=''>
                                    <Button variant='secondary' className='me-3' onClick={ logoutHandler }>
                                        Logout
                                    </Button>
                                </LinkContainer>
                            </div>
                        </>
                    ) : (
                        <>
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
                        </>
                    ) }
                </Card> 
            </Container>
        </div>
    )
}

export default Hero;