
import { bookService } from '../services/book-service.js'
import { storageService } from '../services/storage-service.js'
import { BookList } from '../cmps/BookList.jsx'
import { BookDetails } from '../cmps/BookDetails.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'
import { BookAdd } from '../cmps/BookAdd.jsx'

export class BookApp extends React.Component {

    state = {
        books: [],
        filterBy: '',
        selectBook: null
    }

    componentDidMount() {
        storageService.getBooksFromStore()
            .then(books => {
                this.setState({ books })
            })
            .catch(() => {
                console.log("There are no books in local storage...")
                this.loadBooksFromService()
            })
    }

    loadBooksFromService() {
        bookService.getBooks()
            .then(books => {
                this.setState({ books })
                storageService.saveBooks(books)
            })
    }

    getBooksToShow = () => {
        const books = this.state.books.filter(book => book.title.includes(this.state.filterBy))
        return books;
    }
    onSelectBook = (book) => {
        this.setState({ selectBook: book })
    }
    onSetFilter = (ev) => {
        ev.preventDefault();
        console.log("BookFilter -> filterBy", ev.target)
    }

    // addNewBook = () =>{
    //     console.log('ffff');
    // }

    render() {

        const booksToShow = this.getBooksToShow();

        return (
            <div >
                <div className="toolbar-books-app animate__animated animate__backInDown">
                    <BookAdd />
                    <BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />
                </div>


                <BookList books={booksToShow}/>

            </div>
        )
    }
}
