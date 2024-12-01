import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 style={{ fontSize: '3rem', color: '#4CAF50' }}>Tie Your Knot</h1>
            <p style={{ fontSize: '1.2rem', color: '#555' }}>
                Plan your perfect event with ease and confidence!
            </p>
            <div style={{ marginTop: '20px' }}>
                <Link to="/sign-up" style={{ marginRight: '10px' }}>
                    <button style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer' }}>
                        Get Started
                    </button>
                </Link>
                <Link to="/about-us">
                    <button style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer' }}>
                        Learn More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
