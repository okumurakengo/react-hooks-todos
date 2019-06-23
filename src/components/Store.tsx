import * as React from "react";
import { IState, IStoreProvider } from "../interface";
import { reducer } from "../reducer";

const initialState: IState = {
  todos: [],
  visibilityFilter: "SHOW_ALL",
  nextTodoId: 0
};

export const Store = React.createContext<IState | any>(initialState);

export const StoreProvider: React.FC = ({ children }): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
