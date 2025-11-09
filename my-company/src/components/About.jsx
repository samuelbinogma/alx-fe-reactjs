function About() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#007bff', marginBottom: '2rem' }}>About Us</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify' }}>
        Our company has been providing top-notch services since <strong>1990</strong>. We specialize in various fields including{' '}
        <em>technology, marketing, and consultancy</em>. Our team of experts is committed to innovation, quality, and customer
        satisfaction.
      </p>
      <div
        style={{
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        <div style={infoBox}>30+ Years Experience</div>
        <div style={infoBox}>500+ Happy Clients</div>
        <div style={infoBox}>Global Reach</div>
      </div>
    </div>
  );
}

const infoBox = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '1rem 2rem',
  borderRadius: '10px',
  fontWeight: 'bold',
  minWidth: '150px',
  textAlign: 'center',
};

export default About;