const socket = io("http://localhost:3000");

socket.on("connection", (response) => {
  console.log("res", response);
});
socket.on("message", (data) => {
  console.log(data);

  socket.emit("message", "Hello, I am from client");
});
