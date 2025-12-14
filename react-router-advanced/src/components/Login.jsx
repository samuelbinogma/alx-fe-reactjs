import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate('/profile');
    };

    return (
        <div className='login'>
            <h1>Login Page</h1>
            <p>Please log in to access your profile</p>
            <button onClick={handleLogin}>Simulate Login</button>
        </div>
    );
}