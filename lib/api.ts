
//   export async function signupUser(name: string, email: string, password: string) {
//     const res = await fetch(`http://localhost:3000/api/auth/signup`, {
//     method: "POST",
//     credentials: 'include',
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ name, email, password }),
//   });

//   if (!res.ok) {
//     const error = await res.json();
//     throw new Error(error.message || "Signup failed");
//   }

//   const data = await res.json();
//   // setAuthToken(data.token);
//   return data;
// }




// export async function loginUser(email: string, password: string) {
//     const res = await fetch("https://api.example.com/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });
  
//     if (!res.ok) {
//       throw new Error("Login failed");
//     }
  
//     return res.json(); // Backend should return JWT or session info
//   }
  
//   export function handleOAuthLogin(provider: string) {
//     window.location.href = `https://api.example.com/auth/${provider}`;
//   }
  