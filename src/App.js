import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState } from "react";

function App() {

    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const renderedBooks = [...books, {
            id: Math.round(Math.random() * 9999),
            title: title,
        }];

        setBooks(renderedBooks);
    };

    return (
        <div className="app">
            <BookCreate onCreate={createBook} />
            <BookList books={ books} />
        </div>
    );
}

export default App;