import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="box">
          <Link tabIndex={-1} href="/">
            <div className="profilePic">
              <div className="image">
                <Image
                  src="/assets/images/profilePic.jpg"
                  priority
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
            </div>
          </Link>
          <div className="data">
            <h1 className="name">
              <Link href="/">Margaret Smith</Link>
            </h1>
            <p className="description">
              Writer at The Daily Times spending all of my free time writing
              stories
            </p>
          </div>
          <hr className="horizontal-rule" />
        </div>
      </div>
    </section>
  );
};
