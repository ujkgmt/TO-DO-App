import React from "react";

const todo = ({ todoText, deleteTodo }) => {
  let buttonTrashStyle = {
    backgroundColor: "rgba(255, 0, 0, 0.7)",
    borderRadius: ".7rem",
    flot: "left",
  };
  return (
    <div className=" d-flex justify-content-center mb-2">
      <div className="bg-light rounded w-50 input-group d-flex justify-content-between p-2 px-3">
        <h3>{todoText}</h3>
        <button style={buttonTrashStyle} onClick={deleteTodo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#fff"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default todo;
