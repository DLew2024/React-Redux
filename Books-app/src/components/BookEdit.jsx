import { useState } from "react";
import useBooksContent from "../hooks/use-books.context";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookByID } = useBooksContent();

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
