import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "../../components";

const Article = () => {
  return (
    <>
      <Head>
        <title> | Bloggo</title>
        <meta name="title" content="Bloggo | Next.js Blog Template" />
        <meta
          name="description"
          content="A blog template built with next.js by houssaineamzil"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <div className="px-4 py-8 md:py-10 md:px-6 lg:py-12">
          <div className="mx-auto w-full max-w-3xl">
            <Link
              className="font-semibold tracking-tight text-slate-400"
              href="/"
            >
              ← Back to articles
            </Link>
          </div>
        </div>
        <article>
          <div className="px-4 py-8 md:py-10 md:px-6 lg:py-12 pb-0">
            <div className="mx-auto w-full max-w-3xl">
              <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
                Hiking through the woods
              </h1>
              <p className="font-serif italic tracking-tighter text-slate-500">
                Apr 12, 2022
              </p>
            </div>
          </div>
          <section className="px-4 py-8 md:py-10 md:px-6 lg:py-12">
            <div className="mx-auto w-full max-w-3xl">
              <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
                <p className="mb-7 last:mb-0">
                  This is Rich Text, which includes both{" "}
                  <Link
                    className="underline decoration-1 underline-offset-2"
                    href="https://google.com/?q=hello"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    external links{" "}
                  </Link>{" "}
                  and links to{" "}
                  <Link
                    className="underline decoration-1 underline-offset-2"
                    href="/about"
                  >
                    internal documents
                  </Link>
                  . Links should be handled intelligently or everything might
                  break. Don&apos;t forget about media, too! Do your best to
                  render images using an HTML Serializer.
                </p>
              </div>
            </div>
          </section>
          <section className="px-4 py-8 md:py-10 md:px-[0] lg:py-12">
            <div className="mx-auto w-full max-w-[100vw]">
              <figure className="grid grid-cols-1 gap-4">
                <div className="bg-gray-100 relative h-[40rem]">
                  <span className="box-border block pt-[40rem]"></span>
                  <Image
                    src="/assets/images/posts/person-standing-in-front-of-pine-trees.jpg"
                    alt=""
                    fill
                  />
                </div>
              </figure>
            </div>
          </section>
          <section className="px-4 py-8 md:py-10 md:px-6 lg:py-12">
            <div className="mx-auto w-full max-w-3xl">
              <figure className="grid grid-cols-1 gap-4">
                <div className="bg-gray-100 relative">
                  <span className="box-border block pt-[125%]"></span>
                  <Image
                    src="/assets/images/posts/man-wearing-black-hoodie-carries-black-and-gray-backpacker-near-trees-during-foggy-weather.jpg"
                    alt=""
                    fill
                  />
                </div>
              </figure>
            </div>
          </section>
          <section className="px-4 py-8 md:py-10 md:px-6 lg:py-12">
            <div className="mx-auto w-full max-w-4xl">
              <div className="font-serif text-3xl italic leading-relaxed">
                “Hiking is awesome!” — Abraham Lincoln
              </div>
            </div>
          </section>
          <section className="px-4 py-8 md:py-10 md:px-6 lg:py-12">
            <div className="mx-auto w-full max-w-3xl">
              <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
                <p className="mb-7 last:mb-0">
                  As you know hiking can be a very fulfilling orem ipsum dolor
                  sit amet, animal saperet et ius, eu mei nominavi democritum.
                  Tempor prompta mnesarchum eam te. Vivendum recteque ad quo, et
                  vim quot scaevola hendrerit, sint option euripidis vel te.
                  Impedit veritus qui eu, vel modo accusam at. Te dicit
                  accusamus mea, alia omnium no est.
                </p>
                <p className="mb-7 last:mb-0">
                  Mea cu possit invidunt complectitur, sea omnis vivendum ne.
                  Eros dictas assentior ne qui. At has aperiam reformidans.
                  Rebum choro imperdiet ex mei. Ea vide elit percipit mel, id
                  eam invidunt vituperatoribus. Munere temporibus consequuntur
                  no sit.
                </p>
                <p className="mb-7 last:mb-0">
                  Justo utroque dissentias at est, possim dolorem assueverit eam
                  ut. Te erat illud aperiri est. Cu duo sanctus scriptorem, nam
                  te habeo fuisset quaestio. Eam et error simul. Ferri utamur
                  instructior vim in, ei per mazim congue, nusquam
                  vituperatoribus eos an. Ne mea salutatus vulputate. Tota
                  tractatos argumentum vis te.
                </p>
                <p className="mb-7 last:mb-0">
                  Et iusto nostrud vel, cu vis regione virtute. Malis errem ex
                  quo, an est percipitur dissentias. Te facer primis alterum
                  vel. Tale senserit sadipscing qui et. Prima fabellas facilisis
                  at has.
                </p>
                <p className="mb-7 last:mb-0">
                  Vel erat splendide expetendis et, at probo dictas nominavi
                  pro. Ius facilis electram maluisset et. Minim dignissim ne
                  eam, docendi indoctum conclusionemque mea ne. Ea menandri
                  quaestio corrumpit his. Vim nisl lucilius interesset in, cu
                  porro accusamus accommodare his.
                </p>
                <h2 className="font-sans font-semibold tracking-tighter text-slate-800 text-3xl mb-7 mt-12 first:mt-0 last:mb-0">
                  Heading 1
                </h2>
                <h3 className="font-sans font-semibold tracking-tighter text-slate-800 text-2xl mb-7 last:mb-0">
                  Heading 2
                </h3>
                <h4 className="font-sans font-semibold tracking-tighter text-slate-800 text-xl mb-7 last:mb-0">
                  Heading 3
                </h4>
                <ul className="mb-7 pl-4 last:mb-0 md:pl-6">
                  <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">
                    As you know hiking can be a very fulfilling orem ipsum dolor
                    sit amet.
                  </li>
                  <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">
                    Animal saperet et ius, eu mei nominavi democritum.
                  </li>
                </ul>
                <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
                  <code>Some preformatted content</code>
                </pre>
                <ol className="mb-7 pl-4 last:mb-0 md:pl-6">
                  <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">
                    As you know hiking can be a very fulfilling orem ipsum dolor
                    sit amet.
                  </li>
                  <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">
                    animal saperet et ius, eu mei nominavi democritum.
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </article>
        <div className="px-4 py-8 md:py-10 md:px-6 lg:py-12">
          <div className="mx-auto w-full max-w-3xl">
            <div className="grid grid-cols-1 justify-items-center gap-16 md:gap-24">
              <hr className="h-px w-1/2 border-0 bg-slate-200 md:max-w-sm" />
              <div className="w-full">
                <h2 className="font-sans font-semibold tracking-tighter text-slate-800 text-2xl mb-10">
                  Latest articles
                </h2>
                <ul className="grid grid-cols-1 gap-12">
                  <li>
                    <h2 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
                      <Link href="/articles/hiking-through-the-woods">
                        Hiking through the woods
                      </Link>
                    </h2>
                    <p className="font-serif italic tracking-tighter text-slate-500">
                      Apr 12, 2022
                    </p>
                  </li>
                  <li>
                    <h2 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
                      <Link href="/articles/beach-resort-vacation">
                        Beach resort vacation
                      </Link>
                    </h2>
                    <p className="font-serif italic tracking-tighter text-slate-500">
                      Mar 22, 2022
                    </p>
                  </li>
                  <li>
                    <h2 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
                      <Link href="/articles/perilous-yoga">Perilous yoga</Link>
                    </h2>
                    <p className="font-serif italic tracking-tighter text-slate-500">
                      Jan 6, 2022
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <main>
        <div className="previous">
          <div className="container">
            <Link href="/" className="previous-link">
              ← Back to articles
            </Link>
          </div>
        </div>

        <article>
          <section className="px-4 py-8 md:py-10 md:px-6 lg:py-12">
            <div className="mx-auto w-full max-w-6xl">
              <figure className="grid grid-cols-1 gap-4">
                <div className="bg-gray-100">
                  <Image
                    src="/assets/images/posts/woman-girl-animal-dog.jpg"
                    alt="blah balah blah"
                    fill
                  />
                </div>
              </figure>
            </div>
          </section>
        </article>

        <div className="related">
          <div className="container">
            <div className="grid">
              <hr className="horizontal-rule" />
              <div className="related-articles">
                <h2 className="title">Latest articles</h2>
                <ul className="related-article-grid">
                  <li>
                    <h2 className="related-article-title">
                      <Link href="/articles/hiking-through-the-woods">
                        Hiking through the woods
                      </Link>
                    </h2>
                    <p className="related-article-publichDate">Apr 12, 2022</p>
                  </li>
                  <li>
                    <h2 className="related-article-title">
                      <Link href="/articles/beach-resort-vacation">
                        Beach resort vacation
                      </Link>
                    </h2>
                    <p className="related-article-publichDate">Mar 22, 2022</p>
                  </li>
                  <li>
                    <h2 className="related-article-title">
                      <Link href="/articles/perilous-yoga">Perilous yoga</Link>
                    </h2>
                    <p className="related-article-publichDate">Jan 6, 2022</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main> */}
      <Footer />
    </>
  );
};

export default Article;
