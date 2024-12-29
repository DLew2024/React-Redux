import { useEffect } from "react";
import useBooksContent from "./hooks/use-books.context";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const { fetchBooks } = useBooksContent();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
