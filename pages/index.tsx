import Head from "next/head";
import React from "react";
import { Footer, Header, Hero, HomePosts } from "../components";

const articles = [
  {
    data: {
      featuredImage: {
        alt: "person standing in front of pine trees",
        copyright: "Visually Us (Pexel)",
        dimensions: { height: 2720, width: 4080 },
        height: 2720,
        width: 4080,
        url: "/assets/images/posts/person-standing-in-front-of-pine-trees.jpg",
      },
      publishDate: "2022-08-14T01:54:24+0000",
      title: "Hiking through the woods",
      description:
        "This is Rich Text, which includes both external links and links to internal documents. Links should be handled intelligently or everything might break. This is Rich Text, which includes both external links and links to internal documents. Links should be handled intelligently or everything might break.",
    },
    createdAt: "2022-08-14T01:54:24+0000",
    updateAt: "2022-08-14T01:54:24+0000",
    href: "/articles/hiking-through-the-woods",
    id: "YlcmqxMAACQAI0hd",
    lang: "en-us",
    linkedDocuments: [],
    slug: "hiking-through-the-woods",
    tags: ["life", "story"],
    uid: "hiking-through-the-woods",
    url: null,
  },
  {
    data: {
      featuredImage: {
        alt: "woman sitting on seashore at daytime",
        copyright: "Pixabay (Pexel)",
        dimensions: { height: 3240, width: 4860 },
        height: 3240,
        width: 4860,
        url: "/assets/images/posts/woman-sitting-on-seashore-at-daytime.jpg",
      },
      publishDate: "2022-04-13T19:38:11+0000",
      title: "Beach resort vacation",
      description:
        "Massa sapien faucibus et molestie ac feugiat sed lectus. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Pharetra pharetra massa massa ultricies. Ut morbi tincidunt augue interdum.",
    },
    createdAt: "2022-04-13T19:38:11+0000",
    updateAt: "2022-04-13T19:38:11+0000",
    href: "/articles/beach-resort-vacation",
    id: "YlcmoRMAACMAI0gs",
    lang: "en-us",
    linkedDocuments: [],
    slug: "beach-resort-vacation",
    tags: ["life", "story"],
    uid: "beach-resort-vacation",
    url: null,
  },
  {
    data: {
      featuredImage: {
        alt: "person standing in front of pine trees",
        copyright: "cottonbro studio (Pexel)",
        dimensions: { height: 3943, width: 5914 },
        height: 3943,
        width: 5914,
        url: "/assets/images/posts/woman-girl-animal-dog.jpg",
      },
      publishDate: "2022-04-13T19:37:17+0000",
      title: "Perilous yoga",
      description:
        "This is Rich Text, which includes both external links and links to internal documents. Links should be handled intelligently or everything might break.",
    },
    createdAt: "2022-04-13T19:37:17+0000",
    updateAt: "2022-04-13T19:37:17+0000",
    href: "/articles/perilous-yoga",
    id: "YlcmaxMAACAAI0c0",
    lang: "en-us",
    linkedDocuments: [],
    slug: "perilous-yoga",
    tags: ["life", "story"],
    uid: "perilous-yoga",
    url: null,
  },
];

const Home = ({}) => {
  return (
    <>
      <Head>
        <title>Bloggo</title>
        <meta name="title" content="Bloggo | Next.js Blog Template" />
        <meta
          name="description"
          content="A blog template built with next.js by houssaineamzil"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <HomePosts articles={articles} />
      <Footer />
    </>
  );
};

export default Home;
