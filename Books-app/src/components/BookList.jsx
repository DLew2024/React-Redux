import BookShow from "./BookShow";
import useBooksContent from "../hooks/use-books.context";

function BookList() {
  const { books } = useBooksContent();

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
