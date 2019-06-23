import * as React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <AddTodo />
      <TodoList />
      <Footer />
    </>
  );
};

export default App;
