export default function ProfileOverview() {
    return (
        <>
            <h3>Welcome to Your Profile</h3>
            <p>This is your dashboard overview.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
                <div style={{ padding: '1rem', background: '#ecf0f1', borderRadius: '8px' }}>
                    <strong>Recent Activity</strong><br />
                    Logged in 5 minutes ago
                </div>
                <div style={{ padding: '1rem', background: '#ecf0f1', borderRadius: '8px' }}>
                    <strong>Account Status</strong><br />
                    Active • Verified
                </div>
            </div>
        </>
    );
}