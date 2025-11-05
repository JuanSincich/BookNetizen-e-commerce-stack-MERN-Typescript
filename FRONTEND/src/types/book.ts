export interface Book {
  id: number | string;

  title: string;
  author: string;
  description: string;
  isbn?: string;
  language?: string;
  coverImage: string;

  category: string;
  tags?: string[];

  pages: number;
  condition?: "new" | "used" | "like_new";

  price: number;
  stock?: number;

  userId: string;

  createdAt: Date;
  updatedAt?: Date;
}

export type BookCondition = "new" | "used" | "like_new";
export type LanguageCode = "es" | "en";
