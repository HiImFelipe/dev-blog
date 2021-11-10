import type { NextPage } from "next";
import Head from "next/head";
import CardPost from "../components/CardPost";

import Navigation from "../components/Navigation";
import { CardSection, MainContent, Title } from "../styles/home";
import data from '../posts.json'

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
          {data.map((item, index) => (
            <CardPost key={index} title={item.title} description={item.description} image={item.image}/>
          ))}
        </CardSection>
      </MainContent>
    </div>
  );
};

export default Home;
