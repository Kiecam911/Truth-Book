import React from "react";

const Cards = (props) => {
  return (
    <div className="flex flex-wrap justify-center max-w-screen-xl pb-12 mx-auto">
      {props.truths.map((truth) => (
        <div className="p-4" key={truth.id}>
          <div
            className="flex flex-col p-6 mt-6 text-left border cursor-pointer rounded-xl hover:text-blue-600 focus:text-blue-600 "
            style={{
              width: "18rem",
              height: "12rem",
            }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold" style={{ color: "white" }}>
                {truth.truth}
              </h3>
              <p className="mt-4 text-xl" style={{ color: "white" }}>
                {truth.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
