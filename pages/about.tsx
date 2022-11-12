import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Footer, Header, Hero } from "../components";

const About = () => {
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
      <main>
        <section className="px-4 py-8 md:py-10 md:px-6 lg:py-12">
          <div className="mx-auto w-full max-w-3xl">
            <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
              <p className="mb-7 last:mb-0">
                Hi, I’m Margaret. Welcome to my safe place where I write about
                everything I find inspiring and you might find too.
              </p>
            </div>
          </div>
        </section>
        <section className="py-8 md:py-10 lg:py-12">
          <div className="mx-auto w-full">
            <figure className="grid grid-cols-1 gap-4">
              <div className="bg-gray-100 relative h-[40rem]">
                <span className="box-border block pt-[40rem]"></span>
                <Image
                  className="object-cover"
                  src="/assets/images/owner/serious-young-female-journalist-taking-notes-in-planner.jpg"
                  alt="serious young female journalist taking notes in planner"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
              <figcaption className="text-center font-serif italic tracking-tight text-slate-500">
                <p className="mb-7 last:mb-0">Yes, that&apos;s me!</p>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="px-4 py-8 md:py-10 md:px-6 lg:py-12">
          <div className="mx-auto w-full max-w-4xl">
            <div className="font-serif text-3xl italic leading-relaxed">
              “You go girl!” — George Washington
            </div>
          </div>
        </section>
        <section className="px-4 py-8 md:py-10 md:px-6 lg:py-12">
          <div className="mx-auto w-full max-w-3xl">
            <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
              <p className="mb-7 last:mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sollicitudin eu tincidunt porta condimentum mauris interdum
                facilisis. Maecenas augue netus faucibus lorem. Nulla sed non,
                elementum mi netus libero. Tempor quam sed nunc fames bibendum
                id facilisis ipsum commodo. Neque, augue feugiat eu condimentum
                ut lorem. Faucibus mi tellus, iaculis facilisis sagittis.
                Viverra hendrerit magna pellentesque at convallis purus amet,
                pellentesque et. Potenti tempor volutpat massa tortor mauris
                tincidunt tellus diam pharetra. Viverra praesent lacinia dictum
                tortor erat risus nulla gravida sed. Platea varius venenatis
                habitasse est maecenas sapien eu, volutpat. Cursus diam auctor
                neque ut. Tempor, in tortor odio in mollis sollicitudin.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
