import Layout from "../components/layout";
import Cards from "../components/Cards";
import { useState, useEffect, useCallback } from "react";
import Search from "../components/Search";
const promises = () => {
  const [truthState, setTruthState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    console.log("Rendering Truths", truthState);
  }, [truthState]);

  const searchTruthsHandler = useCallback((searchResult) => {
    setTruthState(searchResult);
  }, []);

  return (
    <div>
      <Layout>
        <div style={{}}>
          <div
            style={{
              paddingTop: "5vh",
            }}
          >
            <Search onLoadTruths={searchTruthsHandler} />
            <div>
              <Cards truths={truthState} />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default promises;
