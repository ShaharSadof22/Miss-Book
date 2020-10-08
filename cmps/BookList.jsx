
import { BookPreview } from './BookPreview.jsx'



export function BookList({ books }) {

    return <div className="books-container" >
        {books.map(oneBook => <BookPreview book={oneBook} key={oneBook.id} />)}
    </div>
}
