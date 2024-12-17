const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(socket);

  socket.on("message", (data) => console.log(data));

  socket.emit("message", "Hi, There, i am from server");
});

httpServer.listen(3000, () => console.log("server running at port no: 3000"));
