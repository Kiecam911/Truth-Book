import Head from "next/head";
// import Link from "next/link ";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
const layout = (props) => {
  return (
    <div className="relative min-h-screen bg-blue-400">
      {/* <Head>
        <title>Truths App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <NavBar />
      {/* <div className="mx-auto text-white sm:max-w-screen-lg sm:flex sm:justify-between"> */}
      <main className="pb-32 mx-auto sm:max-w-screen-lg">{props.children}</main>
      <Footer />
    </div>
  );
};

export default layout;
