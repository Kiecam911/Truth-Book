import { useState } from "react";
import Typical from "react-typical";
import firebase from "../Data/firebase.js";

const Card = (props) => {
  const { truths } = props;
  const [truthIndex, setTruthIndex] = useState(0);
  const length = truths.length;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const updateTruthStatus = (truthID, newStreak) => {
    const messagesRef = firebase.database().ref("truths");

    var hopperRef = messagesRef.child(truthID);
    hopperRef.update({
      streak: newStreak,
    });
  };
  // setIsLoading(true);
  // fetch(
  //   `https://truth-book-default-rtdb.firebaseio.com/truths.json/${truthID}.json`,
  //   {
  //     method: "UPDATE",
  //     headers: { "Content-Type": "application/json" },
  //   }
  // )
  //   .then((response) => {
  //     setIsLoading(false);
  //     setIngredientsState((prevIngredientsState) =>
  //       prevIngredientsState.filter(
  //         (ingredientsState) => ingredientsState.id !== ingredientId
  //       )
  //     );
  //   })
  //   .catch((error) => {
  //     setError("Something went wrong :(");
  //     setIsLoading(false);
  //   });

  return (
    <>
      <div
        className="max-w-md p-4 mx-4 my-8 bg-white rounded-lg shadow-lg"
        style={{
          width: "90vw",
          height: "35vh",
        }}
      >
        <div className="h-full">
          <h1
            className="text-2xl font-semibold text-gray-800"
            style={{ paddingTop: "1vh" }}
          >
            {truths[truthIndex] !== undefined
              ? truths[truthIndex].truth
              : "Loading"}{" "}
          </h1>
          <p
            className="py-2 text-lg text-gray-600 "
            style={{
              paddingTop: "5vh",
            }}
          >
            {truths[truthIndex] !== undefined
              ? truths[truthIndex].description
              : "Please Wait"}{" "}
          </p>

          <h1
            className="text-2xl font-semibold text-gray-800"
            style={{ paddingTop: "2vh" }}
          >
            {truths[truthIndex] !== undefined
              ? truths[truthIndex].streak
              : "Loading"}
            🔥
          </h1>
        </div>
      </div>

      <div className="flex p-4 space-x-4">
        <button
          onClick={() => {
            updateTruthStatus(truths[truthIndex].id, 0);
            truths[truthIndex].streak = 0;

            if (truthIndex + 1 >= length) {
              setTruthIndex(0);
            } else {
              setTruthIndex(truthIndex + 1);
            }
          }}
          className="py-4 bg-red-600 rounded "
          style={{
            color: "white",
            width: "20vw",
            textAlign: "center",
            height: "auto",
          }}
        >
          Failed
        </button>
        <button
          className="py-4 bg-gray-600 rounded "
          onClick={() => {
            if (truthIndex + 1 >= length) {
              setTruthIndex(0);
            } else {
              setTruthIndex(truthIndex + 1);
            }
          }}
          style={{
            color: "white",
            width: "20vw",
            textAlign: "center",
            height: "auto",
          }}
        >
          Skip
        </button>
        <button
          className="py-4 bg-green-600 rounded "
          onClick={() => {
            updateTruthStatus(
              truths[truthIndex].id,
              truths[truthIndex].streak + 1
            );
            truths[truthIndex].streak += 1;

            if (truthIndex + 1 >= length) {
              setTruthIndex(0);
            } else {
              setTruthIndex(truthIndex + 1);
            }
          }}
          style={{
            color: "white",
            width: "20vw",
            textAlign: "center",
            height: "auto",
          }}
        >
          Complete
        </button>
      </div>
    </>
  );
};

export default Card;
