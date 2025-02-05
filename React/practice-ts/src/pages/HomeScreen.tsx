import { Link } from "react-router-dom";

const data = [
  {
    to: "/todo-zustand",
    title: "Todo Zustand",
  },
  {
    to: "/counter-zustand",
    title: "Counter Zustand",
  },
  {
    to: "/todo-redux",
    title: "Todo Redux",
  },
  {
    to: "/counter-redux",
    title: "Counter Redux",
  },
];

const HomeScreen = () => {
  return (
    <div className="grid grid-cols-4 p-4 gap-4">
      {data.map((item, idx) => (
        <Link
          className="w-full p-2 h-14 flex justify-center items-center font-bold border hover:-translate-y-1 rounded-lg hover:bg-slate-300 transition-all duration-300"
          key={idx}
          to={item.to}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default HomeScreen;
