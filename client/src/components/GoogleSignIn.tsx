import React, { useEffect } from "react";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

interface GoogleCredentialResponse {
  credential: string;
  select_by?: string;
}

const GoogleSignIn = () => {
  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: (response: GoogleCredentialResponse) => handleCredentialResponse(response),
      });

      window.google.accounts.id.renderButton(
        document.getElementById("google-signin-button"),
        { theme: "outline", size: "large" }
      );
    } else {
      console.error("Google API is not loaded");
    }
  }, []);

  const handleCredentialResponse = (response: GoogleCredentialResponse) => {
    console.log("Encoded JWT ID token:", response.credential);

  };

  return <div id="google-signin-button"></div>;
};

export default GoogleSignIn;