import React, { useState } from "react";
import Layout from "../components/layout.js";
import firebase from "../Data/firebase.js";

const NewTruth = () => {
  // States
  const [truthInfo, setTruthInfo] = useState({
    truth: "",
    description: "",
    timing: 1,
    duration: 55,
    notify: false,
  });

  // Handlers
  const changeTruth = (e) => {
    setTruthInfo({ ...truthInfo, truth: e.target.value });
  };
  const changeDescription = (e) => {
    setTruthInfo({ ...truthInfo, description: e.target.value });
  };
  // const changeTiming = (e) => {
  //   setTruthInfo({ ...truthInfo, timing: e.target.value });
  // };
  const changeDuration = (e) => {
    setTruthInfo({ ...truthInfo, duration: e.target.value });
  };
  // const changeNotification = (e) => {
  //   setTruthInfo({ ...truthInfo, notify: !truthInfo.notify });
  // };
  const submitHandler = (e) => {
    e.preventDefault();

    if (truthInfo.truth != "" && truthInfo.description != "") {
      alert("Adding Your New Truth.");

      const messagesRef = firebase.database().ref("truths");
      const formattedData = {
        truth: truthInfo.truth,
        description: truthInfo.description,
        duration: truthInfo.duration,
        streak: 0,
      };
      messagesRef.push(formattedData);

      // Reset the input
      setTruthInfo({
        truth: "",
        description: "",
        timing: 1,
        duration: 55,
        notify: false,
      });
    } else {
      alert("Missing Fields. Try Again.");
    }
  };

  // Return
  return (
    <Layout>
      <div
        style={{
          backgroundColor: "rgb(112,168,251)",
          objectFit: "cover",
          width: "100vw",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <div
          className="flex flex-col items-center"
          style={{ paddingTop: "10vh", color: "white" }}
        >
          <h1 className="text-4xl font-bold">Create a New Promise</h1>
          <form onSubmit={submitHandler} className="flex flex-col">
            <label
              className="text-center md:text-3xl text-2xl"
              style={{ paddingTop: "2vh", width: "auto" }}
            >
              Promise You Will Uphold
            </label>
            <input
              type="text"
              name="truth"
              placeholder="Your Truth Here"
              className="relative w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white rounded shadow outline-none focus:outline-none focus:shadow-outline"
              value={truthInfo.truth}
              onChange={changeTruth}
            />
            <label
              className="text-center md:text-3xl text-2xl"
              style={{ paddingTop: "2vh" }}
            >
              Promise Description
            </label>
            <textarea
              type="text"
              name="description"
              placeholder="Reason For This Truth"
              className="relative w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white rounded shadow outline-none focus:outline-none focus:shadow-outline"
              style={{ height: "12vh" }}
              value={truthInfo.description}
              onChange={changeDescription}
            />
            {/* <label style={{ paddingTop: "2vh" }}>
              Reconfirm Your Truth After{" "}
              <span className="font-semibold">
                {truthInfo.timing} {truthInfo.timing < 2 ? "Day" : "Days"}
              </span>
            </label>
            <input
              type="range"
              name="timing"
              className="h-3 overflow-hidden bg-gray-400 rounded-lg appearance-none w-128"
              min={1}
              max={7}
              value={truthInfo.timing}
              onChange={changeTiming}
            /> */}
            <label style={{ paddingTop: "2vh" }}>
              Keep This Truth for{" "}
              <span className="font-semibold">{truthInfo.duration} Days</span>
            </label>
            <input
              type="range"
              name="duration"
              className="h-3 overflow-hidden bg-gray-400 rounded-lg appearance-none w-128"
              min={7}
              max={365}
              value={truthInfo.duration}
              onChange={changeDuration}
            />
            {/* <label style={{ paddingTop: "2vh" }}>Turn on Notifications?</label>
            <input
              type="checkbox"
              value={truthInfo.notify}
              onChange={changeNotification}
            /> */}
            <input
              style={{
                marginTop: "3vh",
                width: "100%",
                textAlign: "center",
                alignItems: "center",
                alignContent: "center",
              }}
              type="submit"
              className="px-4 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default NewTruth;
