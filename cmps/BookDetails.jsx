
import { LongTxt } from './LongTxt.jsx'
import { bookService } from '../services/book-service.js'
import { ReviewAdd } from '../cmps/ReviewAdd.jsx'
import { Reviews } from '../cmps/Reviews.jsx'

export class BookDetails extends React.Component {

    state = {
        book: null
    }

    componentDidMount() {
        // debugger
        const bookId = this.props.match.params.bookId
        bookService.getBookById(bookId)
            .then(book => {
                
                this.setState({ book })
            })
            .catch(() => {
                console.log("Book not in local storage...")
            })
    }

    loadData() {
        let textLength;
        if (this.state.book.pageCount > 500) {
            textLength = 'Long reading';
        } else if (this.state.book.pageCount > 200) {
            textLength = 'Decent Reading';
        } else {
            textLength = 'Light Reading';
        }
        let classColor = 'regular-book';
        if (this.state.book.listPrice.amount > 150) classColor = 'red-book';
        if (this.state.book.listPrice.amount < 20) classColor = 'green-book';

        return { textLength, classColor }
    }

    render() {
        const { book } = this.state;
        if (!book) return <div>Loading...</div>

        else {
            const data = this.loadData()

            return <div className={`book-details-container ${data.classColor && data.classColor}`} >
                <h2>Book Details</h2>
                <h3>Text size({this.state.book.pageCount}): {data.textLength}</h3>
                <h3>Published Date: {(book.publishedDate - 2020) > 1 ? 'Veteran Book' : 'Year – New!'}</h3>

                <LongTxt text={book.description} />

                <ReviewAdd book={this.state.book}/>

                <img src={book.thumbnail} />
                
                {book.listPrice.isOnSale && <div>
                    <h2>This book is for sale!</h2>
                    <img src="./assets/img/for-sale.svg" />
                </div>}

                <Reviews book={book}/>

            </div>
        }
    }
}
