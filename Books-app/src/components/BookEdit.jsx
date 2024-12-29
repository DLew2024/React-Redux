import { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookByID } = useContext(BooksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editBookByID(book.id, title);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input onChange={handleChange} value={title} className="input" />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
