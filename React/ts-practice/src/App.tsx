import { Routes, Route } from "react-router-dom"
import TodoReduxScreen from "./pages/TodoReduxScreen"
import HomeScree from "./pages/HomeScree"
const App = () => {
  return (
<Routes>
  <Route path="/" element={<HomeScree />} />
  <Route path="/todo-redux" element={<TodoReduxScreen />} />
</Routes>
  )
}

export default App
