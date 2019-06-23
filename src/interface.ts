export interface ITodoState {
  id: number;
  text: string;
  completed: boolean;
}

export type TFilters = "SHOW_ALL" | "SHOW_COMPLETED" | "SHOW_ACTIVE";

export interface IState {
  todos: ITodoState[];
  visibilityFilter: TFilters;
  nextTodoId: number;
}

interface IAddTodoAction {
  type: "ADD_TODO";
  payload: { id: number; text: string };
}
interface IToggleTodoAction {
  type: "TOGGLE_TODO";
  payload: { id: number };
}
interface ISetVisibilityFilterAction {
  type: "SET_VISIBILITY_FILTER";
  payload: { filter: TFilters };
}
export type IActions =
  | IAddTodoAction
  | IToggleTodoAction
  | ISetVisibilityFilterAction;

export interface IStoreProvider {
  state: IState;
  dispatch: React.Dispatch<IActions>;
}
