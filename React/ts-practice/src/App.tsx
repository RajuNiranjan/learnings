import { Routes, Route } from "react-router-dom"
import TodoReduxScreen from "./pages/TodoReduxScreen"
import HomeScree from "./pages/HomeScree"
import TodoZustandScreen from "./pages/TodoZustandScreen"
const App = () => {
  return (
<Routes>
  <Route path="/" element={<HomeScree />} />
  <Route path="/todo-redux" element={<TodoReduxScreen />} />
  <Route path="/todo-zustand" element={<TodoZustandScreen />} />
</Routes>
  )
}

export default App
