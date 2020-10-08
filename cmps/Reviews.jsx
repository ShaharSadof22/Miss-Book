
export function Reviews({ book }) {

    return <div className="reviews-container" >
        {(book.reviews) ? book.reviews.map(review => <div>
            <h4>Name: {review.name}</h4>
            <h4>Rate: {review.rate}</h4>
            <h4>Read At: {review.readAt}</h4>
            <h4>Review: {review.textReview}</h4>
        </div>) : <p>There are no reviews for this book</p> }
        </div>
}
