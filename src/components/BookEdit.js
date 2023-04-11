import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
    const { editBookById } = useContext(BooksContext);

    const [newTitle, setNewTitle] = useState(book.title);
    const handleChange = (event) => {
        setNewTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id, newTitle);
    };
    return (
        <div>
            <form className="book-edit" onSubmit={handleSubmit}>
                <input className="input" value={newTitle} onChange={ handleChange} />
            <button className="button is-primary"> Save </button>
            </form>  
        </div>
    );
}

export default BookEdit;