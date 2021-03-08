import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import Search from "../components/Search";
import { useState, useEffect, useCallback } from "react";
import Card from "../components/Card";
import Typical from "react-typical";

export default function Home() {
  const [truthState, setTruthState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("Rendering Truths", truthState);
  }, [truthState]);

  const searchTruthsHandler = useCallback((searchResult) => {
    setTruthState(searchResult);
  }, []);

  return (
    <Layout>
      <div>
        <Head>
          <title>Truths App</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
            rel="stylesheet"
          />
        </Head>

        {/* MAIN SECTION OF HOME PAGE */}
        <main
          className="flex flex-col items-center justify-center text-center"
          style={{ paddingTop: "5vh" }}
        >
          <h1
            className="text-3xl font-bold md:text-6xl"
            style={{ fontFamily: "Lobster, cursive", color: "white" }}
          >
            {" "}
            <Typical steps={[500, "Welcome to the Truth Book!"]} />
          </h1>

          <p
            className="text-2xl md:text-4xl"
            style={{ fontFamily: "Lobster, cursive", color: "white" }}
          >
            Get started by adding a{" "}
            <Link href="/new">
              <a
                className="hover:bg-blue-300"
                style={{ color: "rgb(3,94,173)" }}
              >
                Truth!
              </a>
            </Link>
          </p>
          <Card truths={truthState} />

          <div className="hidden">
            <Search onLoadTruths={searchTruthsHandler} />
          </div>
        </main>
      </div>
    </Layout>
  );
}
