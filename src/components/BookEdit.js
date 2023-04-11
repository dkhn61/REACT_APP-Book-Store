import { useState } from "react";
import useBooksContext from "../hooks/books-context-hook";

function BookEdit({ book, onSubmit }) {
    const { editBookById } = useBooksContext();

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