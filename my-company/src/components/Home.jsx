function Home() {
  return (
    <div
      style={{
        padding: '60px 20px',
        textAlign: 'center',
        background: 'linear-gradient(to right, #007bff, #00c6ff)',
        color: 'white',
        borderRadius: '0 0 20px 20px',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to Our Company</h1>
      <p style={{ fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto' }}>
        We are dedicated to delivering excellence in all our services.
      </p>
      <button
        style={{
          marginTop: '2rem',
          padding: '12px 30px',
          fontSize: '1.1rem',
          backgroundColor: 'white',
          color: '#007bff',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        }}
      >
        Learn More
      </button>
    </div>
  );
}

export default Home;