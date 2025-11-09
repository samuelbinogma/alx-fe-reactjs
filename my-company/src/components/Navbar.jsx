import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{
            backgroundColor: '#007bff',
            padding: '1rem',
            boxShadow: '0 20px 5px rgba(0,0,0,0.1',
            }}
        >
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                }}
            >
                <Link 
                    to="/"
                    style={{
                        color: 'white',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                    }}
                >
                    My Company
                </Link>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <Link
                        to="/"
                        style={navLinkStyle}
                        onMouseEnter={(e) => (e.target.style.color = '#fff')}
                        onMouseLeave={(e) => (e.target.style.color = '#ddd')}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        style={navLinkStyle}
                        onMouseEnter={(e) => (e.target.style.color = '#fff')}
                        onMouseLeave={(e) => (e.target.style.color = '#ddd')}
                    >
                        About
                    </Link>
                    <Link
                        to="/services"
                        style={navLinkStyle}
                        onMouseEnter={(e) => (e.target.style.color = '#fff')}
                        onMouseLeave={(e) => (e.target.style.color = '#ddd')}
                    >
                        Services
                    </Link>
                    <Link
                        to="/contact"
                        style={navLinkStyle}
                        onMouseEnter={(e) => (e.target.style.color = '#fff')}
                        onMouseLeave={(e) => (e.target.style.color = '#ddd')}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}

const navLinkStyle = {
    color: '#ddd',
    textDecoration: 'none',
    fontSize: '1.1rem',
    transition: 'color 0.3s'
}

export default Navbar;