import * as React from "react";
import { Store } from "./Store";
import { IStoreProvider } from "../interface";

const AddTodo: React.FC = (): JSX.Element => {
  const { state, dispatch }: IStoreProvider = React.useContext(Store);

  const [value, setValue] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) return;
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: state.nextTodoId,
        text: value.trim()
      }
    });
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
