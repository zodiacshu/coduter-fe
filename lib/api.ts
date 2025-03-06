export async function loginUser(email: string, password: string) {
    const res = await fetch("https://api.example.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  
    if (!res.ok) {
      throw new Error("Login failed");
    }
  
    return res.json(); // Backend should return JWT or session info
  }
  
  export function handleOAuthLogin(provider: string) {
    window.location.href = `https://api.example.com/auth/${provider}`;
  }
  