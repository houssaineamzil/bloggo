import Image from "next/image";
import React from "react";
import { PostCard } from "./postCard";
import { Articles } from "../types";

interface Props {
  articles: Articles;
}

export const HomePosts = (props: Props) => {
  const { articles } = props;
  return (
    <main className="home-posts">
      <div className="container">
        <div className="posts">
          {articles.map((article) => (
            <PostCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </main>
  );
};
