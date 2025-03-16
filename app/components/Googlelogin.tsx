// components/GoogleLogin.js
import { useEffect } from 'react';

// Declare the global `google` object to avoid TypeScript errors
declare const google: any;

export default function GoogleLogin() {
  useEffect(() => {
    // Ensure the Google Identity Services script is loaded in your HTML head or via a <Script> tag.
    /* global google */
    google.accounts.id.initialize({
      client_id: 'GOOGLE_CLIENT_ID', // Replace with your actual client ID
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById('googleSignInDiv'),
      { theme: 'outline', size: 'large' }
    );
  }, []);

  const handleCredentialResponse = (response: any) => {
    console.log('Received token:', response.credential);
    // Send the token to your Go backend
    fetch('http://coduter-be-dev.us-west-2.elasticbeanstalk.com/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token: response.credential })
    })
      .then(res => res.json())
      .then(data => {
        // Handle backend response (e.g., store session info, redirect user)
        console.log('Backend response:', data);
      })
      .catch(error => console.error('Error sending token to backend:', error));
  };

  return (
    <div>
      <div id="googleSignInDiv"></div>
    </div>
  );
}
