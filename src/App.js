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

    const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) =>{
        return book.id !== id ;
    })
        setBooks(updatedBooks);
    };

    return (
        <div className="app">
            <BookCreate onCreate={createBook} />
            <BookList books={books} onDelete={ deleteBookById} />
        </div>
    );
}

export default App;