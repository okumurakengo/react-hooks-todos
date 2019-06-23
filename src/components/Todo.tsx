import * as React from "react";

interface ITodoProps {
  completed: boolean;
  text: string;
  onClick: () => void;
}
const Todo: React.FC<ITodoProps> = ({
  text,
  completed,
  onClick
}): JSX.Element => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {text}
    </li>
  );
};

export default Todo;
