const { Server } = require("socket.io");
const { createServer } = require("http");

const httpServer = createServer();
const socket = new Server(httpServer, {
  cors: {
    origin: "http://127.0.0.1:5500",
  },
});

socket.on("connection", (socket) => {
  console.log(socket);

  socket.on("message", (data) => console.log(data));

  socket.emit("message", "Hi there! I am John Deo");
});

httpServer.listen(3000, () => console.log("server connected"));
