import { Outlet, Link } from 'react-router-dom';

export default function Profile() {
    return (
        <div className="container">
            <div className="profile-section">
                <h2>Profile Section</h2>

                <div className="profile-nav">
                    <Link to="/profile">Overview</Link>
                    <Link to="/profile/details">Details</Link>
                    <Link to="/profile/settings">Settings</Link>
                </div>

                <div className="profile-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}