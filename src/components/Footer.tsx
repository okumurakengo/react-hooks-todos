import * as React from "react";
import { Store } from "./Store";
import { IStoreProvider, TFilters } from "../interface";
import FilterLink from "./FilterLink";

const Footer: React.FC = (): JSX.Element => {
  const { state, dispatch }: IStoreProvider = React.useContext(Store);

  const handleClick = (filter: TFilters): void => {
    dispatch({
      type: "SET_VISIBILITY_FILTER",
      payload: { filter }
    });
  };

  const getIsActive = (filter: TFilters): boolean => {
    return state.visibilityFilter === filter;
  };

  return (
    <>
      <span>Show:</span>
      <FilterLink {...{ handleClick, getIsActive, filter: "SHOW_ALL" }}>
        ALL
      </FilterLink>
      <FilterLink {...{ handleClick, getIsActive, filter: "SHOW_ACTIVE" }}>
        Active
      </FilterLink>
      <FilterLink {...{ handleClick, getIsActive, filter: "SHOW_COMPLETED" }}>
        Completed
      </FilterLink>
    </>
  );
};

export default Footer;
