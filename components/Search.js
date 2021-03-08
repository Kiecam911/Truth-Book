import React, { useState, useEffect, useRef } from "react";

const Search = React.memo((props) => {
  const [enteredSearch, setEnteredSearch] = useState("");

  const { onLoadTruths } = props;
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredSearch === inputRef.current.value) {
        const query =
          enteredSearch.length === 0
            ? ""
            : `?orderBy="truth"&equalTo="${enteredSearch}"`;
        fetch(
          "https://truth-book-default-rtdb.firebaseio.com/truths.json" +
            encodeURI(query)
        )
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((responseData) => {
            const loadedTruths = [];
            console.log("RESPONSE DATA", responseData);
            for (const key in responseData) {
              loadedTruths.push({
                id: key,
                truth: responseData[key].truth,
                description: responseData[key].description,
                duration: responseData[key].duration,
                timing: responseData[key].timing,
                streak: responseData[key].streak,
              });
            }
            onLoadTruths(loadedTruths);
          });
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredSearch, onLoadTruths, inputRef]);

  return (
    <div
      className="flex flex-col items-center p-4 "
      style={{ paddingLeft: "12vw", paddingRight: "12vw" }}
    >
      <label className="text-2xl font-bold text-white">Filter by Truth</label>
      <input
        className="block min-w-full p-2 my-4 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
        type="email"
        placeholder="Search"
        aria-label="Search"
        ref={inputRef}
        type="text"
        value={enteredSearch}
        onChange={(event) => setEnteredSearch(event.target.value)}
      />
    </div>
  );
});

export default Search;
