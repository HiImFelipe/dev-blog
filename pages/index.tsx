import type { NextPage } from "next";
import Head from "next/head";
import CardPost from "../components/CardPost";

import Navigation from "../components/Navigation";
import { CardSection, MainContent, Title } from "../styles/home";

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
        <Title>Latest Posts</Title>

        <CardSection>
          <CardPost />

          <CardPost />

          <CardPost />

          <CardPost />

          <CardPost />
        </CardSection>
      </MainContent>
    </div>
  );
};

export default Home;
