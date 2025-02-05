import { Routes, Route } from "react-router-dom";
import TodoZustandScree from "./pages/TodoZustandScree";
import HomeScreen from "./pages/HomeScreen";
import CounterZustandScreen from "./pages/CounterZustandScreen";
import TodoReduxScree from "./pages/TodoReduxScree";
import CounterReduxScreen from "./pages/CounterReduxScreen ";

const Data = [
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/todo-zustand",
    element: <TodoZustandScree />,
  },
  {
    path: "/counter-zustand",
    element: <CounterZustandScreen />,
  },
  {
    path: "/todo-redux",
    element: <TodoReduxScree />,
  },
  {
    path: "/counter-redux",
    element: <CounterReduxScreen />,
  },
];

const App = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Routes>
        {Data.map((item, idx) => (
          <Route key={idx} path={item.path} element={item.element} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
