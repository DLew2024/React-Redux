import { useContext } from "react";
import BooksContext from "../context/books";

function useBooksContent() {
  return useContext(BooksContext);
}

export default useBooksContent;
