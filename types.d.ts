export interface Article {
  data: {
    featuredImage: {
      alt: string;
      copyright?: string;
      dimensions: { height: number; width: number };
      height: number;
      width: number;
      url: string;
    };
    publishDate: string;
    title: string;
    description: string;
  };
  createdAt: string;
  updateAt: string;
  href: string;
  id: string;
  lang: string;
  linkedDocuments?: any[];
  slug: string;
  tags: string[];
  uid: string;
  url: string | null;
}

export type Articles = Article[];

