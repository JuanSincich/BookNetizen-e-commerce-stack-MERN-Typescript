import { Schema, model } from "mongoose";
import { IBook } from "./interfaces/IBook";

const bookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    isbn: {
      type: String,
      required: false,
    },
    language: {
      type: String,
      required: false,
    },
    coverImage: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    pages: {
      type: Number,
      required: true,
    },
    condition: {
      type: String,
      enum: ["new", "used", "like_new"],
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: false,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = model<IBook>("Book", bookSchema);
export default Book;
