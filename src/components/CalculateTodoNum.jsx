import React, { useContext } from "react";
import SimpleContext from "../context/simpleContext";

const CalculateTodoNum = () => {
  const context = useContext(SimpleContext);
  const { todos } = context;
  let badgeStyle = "";


  if (todos.length <= 3) badgeStyle = "bg-warning";
  if (todos.length <= 1) badgeStyle = "bg-danger";
  if (todos.length >= 4) badgeStyle = "bg-success";

  return (
    <div className="text-center mb-4">
      <h3 className="text-white">
        تعداد{" "}
        <span className={`badge rounded-pill ${badgeStyle}`}>
          {todos.length}
        </span>{" "}
        کار انجام نشده دارید
      </h3>
    </div>
  );
};

export default CalculateTodoNum;
