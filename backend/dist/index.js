"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
// Create a WebSocket server on port 8080
const wss = new ws_1.WebSocketServer({ port: 8080 });
let userCount = 0;
wss.on("connection", (socket) => {
    // Increment user count when a new client connects
    userCount += 1;
    console.log("User connected. Total users:", userCount);
    // Broadcast the updated user count to all clients
    broadcastUserCount();
    // Handle messages from the client
    socket.on("message", (message) => {
        console.log("Received:", message.toString());
        // Echo the message back to the client (optional)
        socket.send(`Echo: ${message}`);
    });
    // Handle client disconnection
    socket.on("close", () => {
        // Decrement user count when a client disconnects
        userCount -= 1;
        console.log("User disconnected. Total users:", userCount);
        // Broadcast the updated user count to all clients
        broadcastUserCount();
    });
    // Handle errors
    socket.on("error", (error) => {
        console.error("WebSocket error:", error);
    });
});
// Function to broadcast the user count to all connected clients
function broadcastUserCount() {
    const data = JSON.stringify({ type: "userCount", count: userCount });
    wss.clients.forEach((client) => {
        if (client.readyState === ws_1.WebSocket.OPEN) {
            client.send(data);
        }
    });
}
console.log("WebSocket server is running on ws://localhost:8080");
