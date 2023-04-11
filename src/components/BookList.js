import BookShow from "./BookShow";
import useBooksContext from "../hooks/books-context-hook";

function BookList() {
    const { books } = useBooksContext();

    const renderedBooks = books.map((book) => {
        return (<BookShow key={book.id} book={book} />);
    });

    return (
        <div className="book-list">
         {renderedBooks}
        </div>
    );
}

export default BookList;