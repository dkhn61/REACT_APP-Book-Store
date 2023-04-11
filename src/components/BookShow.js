import BookEdit from "./BookEdit";
import { useState } from "react";
import useBooksContext from "../hooks/books-context-hook";

function BookShow({ book }) {
    const { deleteBookById } = useBooksContext();

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    }

    const [showEdit, setShowEdit] = useState(false);

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = () => {
        setShowEdit(false);
    };

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={ handleSubmit} />
    }

    return (
        <div className="book-show">
            <img
            alt="photos"
            src={`https://picsum.photos/seed/${book.id}/300/200`}></img>
            <div>{content}</div>
            <div className="actions">
                 <button className="edit" onClick={handleEditClick} >
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BookShow;