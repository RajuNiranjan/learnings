const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5000",
  },
});

let playerScores = [];

io.on("connection", (socket) => {
  socket.on("scores", (scores) => {
    playerScores.push({ scores, id: socket.id });

    setInterval(() => {
      io.emit("updateScores", playerScores);
    }, 5000);
  });
});

httpServer.listen(3000, () => console.log("server running at port no: 3000"));
