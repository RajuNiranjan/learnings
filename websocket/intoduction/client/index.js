const socket = io("http://localhost:3000");

socket.on("connect", () => console.log("Connected"));

socket.on("message", (data) => console.log(data));
