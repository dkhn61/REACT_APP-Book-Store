import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookCreate() {
    const { createBook } = useContext(BooksContext);

    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(text);
        setText('');
    };
    
    return (
        <div className="book-create">
            <form onSubmit={handleSubmit}>
                <input className="input" value={ text} onChange={handleChange}/>
                <button className="button">Click me!</button>
            </form>
        </div>
    );
}

export default BookCreate;