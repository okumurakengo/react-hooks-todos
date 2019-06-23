import * as React from "react";
import { Store } from "./Store";
import { IStoreProvider, ITodoState, TFilters } from "../interface";
import Todo from "./Todo";

const TodoList: React.FC = (): JSX.Element => {
  const { state, dispatch }: IStoreProvider = React.useContext(Store);

  const handleClick = (id: number) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: { id }
    });
  };

  const getVisibleTodos = (todos: ITodoState[], filter: TFilters) => {
    switch (filter) {
      case "SHOW_ALL":
        return todos;
      case "SHOW_COMPLETED":
        return todos.filter((t: ITodoState) => t.completed);
      case "SHOW_ACTIVE":
        return todos.filter((t: ITodoState) => !t.completed);
      default:
        throw new Error("Unknown filter: " + filter);
    }
  };

  return (
    <ul>
      {getVisibleTodos(state.todos, state.visibilityFilter).map(
        (todo: ITodoState) => (
          <Todo key={todo.id} {...todo} onClick={() => handleClick(todo.id)} />
        )
      )}
    </ul>
  );
};

export default TodoList;
