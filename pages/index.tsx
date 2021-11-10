import type { NextPage } from "next";
import Head from "next/head";

import Navigation from "../components/Navigation";
import { MainContent } from "../styles/home";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Dev blog's home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <MainContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quis,
        fugit cum ad recusandae id vero reprehenderit laudantium error
        blanditiis.
      </MainContent>
    </div>
  );
};

export default Home;
