const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "http://127.0.0.1:5500",
  },
});

io.on("connection", (socket) => {
  console.log(socket);

  socket.on("message", (data) => console.log(data));

  io.emit("message", "Hello! Raju");
});

httpServer.listen(3000, () => console.log("server is connected!"));
