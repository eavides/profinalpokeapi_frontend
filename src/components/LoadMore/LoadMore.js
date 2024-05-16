import React from "react";
function LoadMore({ onClickLoadMore, hide }) {
  return (
    <>
      <div className={`btnContainer ${hide ? "btnContainer__hide" : ""} `}>
        <button className="btnContainer__more" onClick={onClickLoadMore}>
          Cargar más
        </button>
      </div>
    </>
  );
}

export default LoadMore;
