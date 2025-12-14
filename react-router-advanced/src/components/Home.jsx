import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='home'>
            <h1>Welcome to Advanced Routing Demo</h1>
            <nav>
                <Link to="/profile">Go to Profile (Protected)</Link> | 
                <Link to="/blog/123">View Blog Post 123</Link> | 
                <Link to="/login">Login</Link>
            </nav>
        </div>
    );
}