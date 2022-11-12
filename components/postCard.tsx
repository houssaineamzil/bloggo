import Image from "next/image";
import Link from "next/link";
import { Article } from "../types";

export interface Props {
  article: Article;
}

export const PostCard = (props: Props) => {
  const { article } = props;
  const dateFormat = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(article.data.publishDate));

  return (
    <div className="post-card">
      <Link className="image" tabIndex={-1} href={article.href}>
        <Image
          src={article.data.featuredImage.url}
          alt={article.data.featuredImage.alt}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="data">
        <h2 className="title">
          <Link href={article.href}>{article.data.title}</Link>
        </h2>
        <p className="publication-date">{dateFormat}</p>
        <p className="description">{article.data.description}</p>
      </div>
    </div>
  );
};
