const { NavLink } = ReactRouterDOM


export function BookPreview({ book }) {

    let currencyTag;
    switch (book.listPrice.currencyCode) {
        case "ILS":
            currencyTag = '&#8362;';
            break;
        case "USD":
            currencyTag = '&#x24;';
            break;
    }

    return <NavLink to={`/book/${book.id}`} className="book-view animate__animated animate__fadeIn">
        <header>
            <h2>Title: {book.title}</h2>

            {book.listPrice.currencyCode === "ILS" ?
             <h2>{`Price: ${book.listPrice.amount}`}&#8362;</h2> :
              <h2>Price: &#x24;{`${book.listPrice.amount}`}</h2>
            }
        </header>

        <img src={book.thumbnail}></img>
    </NavLink>
}