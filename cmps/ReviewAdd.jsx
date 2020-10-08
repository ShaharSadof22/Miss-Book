import { bookService } from '../services/book-service.js'

export class ReviewAdd extends React.Component {

    state = {
        reviewData: {
            name: 'Books Reader',
            rate: 0,
            readAt: bookService.getTodayDate(),
            textReview: ''
        }
    }

    onUpdateData = (ev) => {
        const value = ev.target.value === 'number' ? +ev.target.value : ev.target.value
        this.setState({ reviewData: { ...this.state.reviewData, [ev.target.name]: value } })
    }
    onSubmitReview = (ev) => {
        ev.preventDefault();
        bookService.addReview(this.props.book.id, this.state.reviewData)
    }

    render() {
        return <form className="review-from">
            <label >full name:</label>
            <input name="name" type="text" value={this.state.reviewData.name} onChange={this.onUpdateData} />

            <div className="form-group">
                <label>Rate the book: </label>
                <select name="rate" className="rate-form" onChange={this.onUpdateData}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <input name="readAt" className="user-input-date" onChange={this.onUpdateData} type="date" ></input>

            <textarea name="textReview" rows="4" cols="50" onChange={this.onUpdateData}></textarea>

            <button onClick={this.onSubmitReview}>Submit</button>
        </form>
    }


    // value={this.state.date ? this.state.date : '2020-06-01'}




}