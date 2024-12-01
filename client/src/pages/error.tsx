import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '3rem', color: '#FF6347' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: '1.5rem', color: '#555' }}>
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <p style={{ fontSize: '1rem', color: '#888' }}>
        You may have mistyped the address, or the page may have moved.
      </p>
      <div style={{ marginTop: '30px' }}>
        <Link to="/">
          <button
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              color: '#FFF',
              backgroundColor: '#4CAF50',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginRight: '10px',
            }}
          >
            Go to Home
          </button>
        </Link>
        <Link to="/about-us">
          <button
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              color: '#FFF',
              backgroundColor: '#007BFF',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Learn About Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;