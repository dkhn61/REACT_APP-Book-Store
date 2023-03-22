import { useState } from "react";
function BookCreate({ onCreate }) {
    
    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(text);
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