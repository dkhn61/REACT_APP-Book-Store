import { useState } from "react";
function BookEdit({onEdit, book}) {
    const [newTitle, setNewTitle] = useState(book.title);
    const handleChange = (event) => {
        setNewTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onEdit(book.id, book.title);
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