import BookEdit from "./BookEdit";
import { useState } from "react";

function BookShow({ book, onDelete , onEdit}) {
    
    const handleDeleteClick = () => {
        onDelete(book.id);
    }

    const [showEdit, setShowEdit] = useState(false);

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit onEdit={ onEdit} book={book} />
    }

    return (
        <div className="book-show">
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