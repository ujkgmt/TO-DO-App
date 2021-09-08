import React, { useContext, useRef, useEffect } from "react";
import SimpleContext from "./../context/simpleContext";

const NewTodo = () => {
  const context = useContext(SimpleContext);
  const inputRef = useRef(null);
useEffect(()=>{
  inputRef.current.focus()
})
  return (
    <div>
      <form className="m-5 " onSubmit={context.handleNewTodo}>
        <div className="d-flex align-items-center justify-content-center ">
          <div className=" input-group w-50 ">
            <button className="btn btn-success" type="submit">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#fff"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z" />
              </svg>
            </button>
            <input
              ref={inputRef}
              type="text"
              dir="rtl"
              className="form-control"
              style={{ fontSize: "1.2rem" }}
              placeholder="اسم کارتو بنویس ..."
              onChange={context.inputOnChenge}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;
