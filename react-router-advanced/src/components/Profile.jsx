import { Routes, Route, Link } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';
import ProfileOverview from './ProfileOverview';

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
                    <Routes>
                        <Route index element={<ProfileOverview />} />

                        <Route path="details" element={<ProfileDetails />} />
                        <Route path="settings" element={<ProfileSettings />} />

                        <Route path="*" element={<ProfileOverview />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}