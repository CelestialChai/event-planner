import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  // Get the error details from React Router
  const error: any = useRouteError();

  return (
    <div style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}>
      <h1 style={{ fontSize: "3rem", color: "#FF6347" }}>Oops!</h1>
      <p style={{ fontSize: "1.5rem", color: "#555" }}>Something went wrong.</p>
      {error?.statusText || error?.message ? (
        <p style={{ fontSize: "1.2rem", color: "#888" }}>
          <strong>Error:</strong> {error.statusText || error.message}
        </p>
      ) : null}
      <div style={{ marginTop: "20px" }}>
        <Link to="/">
          <button
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              color: "#FFF",
              backgroundColor: "#4CAF50",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Go Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
