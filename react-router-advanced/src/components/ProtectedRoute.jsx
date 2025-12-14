// src/components/ProtectedRoute.jsx
import { useAuth } from './useAuth';
import { Navigate } from 'react-router-dom';


export default function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();

    // If not authenticated, redirect to login page
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // If authenticated, render the protected content (children)
    return children;
}