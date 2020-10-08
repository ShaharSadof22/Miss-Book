import { bookService } from '../services/book-service.js'


export function DropdownSearch({ search, googleBooks, addNewBook }) {

    const addBookToList = (googleBook) => {
        console.log('hey');
        const book = bookService.makeGoogleBookToRegular(googleBook);
        bookService.addGoogleBook(book);
        // addNewBook();
    }

    return <div className="books-in-dropdown">

        {googleBooks.map(googleBook => {
            const googleBookName = googleBook.volumeInfo.title;

            if (search.toLowerCase() === googleBookName.substring(0, search.length).toLowerCase()) {
                return <div className="book-in-dropdown">
                    <p>{googleBookName.length > 25 ? googleBookName.substring(0, 20) + '...' : googleBookName}</p>
                    <button onClick={() => addBookToList(googleBook)}>+</button>
                </div>
            }
        })}


    </div>
}

// key={book.volumeInfo.id}