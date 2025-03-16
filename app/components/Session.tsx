import { useSession } from "next-auth/react";

// Extend the Session type to include accessToken
declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

export default function ProtectedPage() {
  const { data: session } = useSession();

  const fetchProtectedData = async () => {
    if (session?.accessToken) {
      const response = await fetch("http://coduter-be-dev.us-west-2.elasticbeanstalk.com/auth", {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      });
      const data = await response.json();
      // Handle the response
    }
  };

  return (
    <div>
      <h1>Protected Page</h1>
      <button onClick={fetchProtectedData}>Fetch Protected Data</button>
    </div>
  );
}