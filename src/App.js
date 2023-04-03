import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

    const [books, setBooks] = useState([]);
    
    const fetchBooks = async () => { 
        const response = await axios.get('http://localhost:3002/books');

        console.log(response);
        setBooks(response.data);
    };

    useEffect(() => { 
        fetchBooks();
    }, []);

    const createBook = async (title) => {

        const response = await axios.post('http://localhost:3002/books', {
            title,
        }); 
        
        const renderedBooks = [...books, 
            response.data
        ];

        setBooks(renderedBooks);
    };

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3002/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3002/books/${id}`, {
            title: newTitle
        })
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
            return {...book, ...response.data};
            }
           return book;
        });

        setBooks(updatedBooks);
    };

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookCreate onCreate={createBook} />
            <BookList books={books} onDelete={ deleteBookById} onEdit ={editBookById} />
        </div>
    );
}

export default App;