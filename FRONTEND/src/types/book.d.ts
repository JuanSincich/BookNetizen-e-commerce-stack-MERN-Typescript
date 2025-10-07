// src/types/book.d.ts
interface Book {
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
  condition?: "new" | "used";

  price: number;
  stock?: number;

  userId: string;

  createdAt: Date;
  updatedAt?: Date;
}

type BookCondition = "new" | "used" | "like_new";
type LanguageCode = "es" | "en";

export default Book;
