import { useEffect, useState } from "react";
import Input from "./Input";
import io from "socket.io-client";
export const GameDashBoard = () => {
  const socket = io("http://localhost:3000");

  const [scores, setScores] = useState({});
  const [score, setScore] = useState([]);
  console.log("Scores", score);
  function handleInput(e) {
    const { name, value } = e.target;
    setScores((prev) => ({ ...prev, [name]: value }));
  }

  function connectSocket() {
    socket.on("connection", (socket) => {
      console.log(socket);
    });
  }

  useEffect(() => {
    connectSocket();
  }, []);

  function onSend() {
    socket.emit("scores", scores);
    socket.on("updateScores", (scores) => setScore(scores));
  }

  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <div className="w-[450px] p-4 rounded-xl border space-y-4">
        <Input
          placeholder="enter your name"
          name="name"
          handleInput={handleInput}
        />
        <Input
          placeholder="enter your score"
          name="score"
          handleInput={handleInput}
        />
        <button
          type="button"
          onClick={onSend}
          className="p-4 w-full rounded-xl bg-black text-white font-bold"
        >
          Send
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {score.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border-b text-left">Name</th>
                  <th className="px-4 py-2 border-b text-left">Score</th>
                </tr>
              </thead>
              <tbody>
                {score.map((score, idx) => (
                  <tr key={idx} className="even:bg-gray-50">
                    <td className="px-4 py-2 border-b">{score.scores.name}</td>
                    <td className="px-4 py-2 border-b">{score.scores.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
