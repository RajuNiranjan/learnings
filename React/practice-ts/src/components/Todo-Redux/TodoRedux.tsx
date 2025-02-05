import { TodoReduxInput } from "./TodoReduxInput";
import { TodoReduxList } from "./TodoReduxList";

export const TodoRedux = () => {
  return (
    <div className="space-y-4">
      <h1 className="font-medium text-3xl">Todo Redux</h1>
      <TodoReduxInput />
      <TodoReduxList />
    </div>
  );
};
