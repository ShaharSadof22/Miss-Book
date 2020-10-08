

export class LongTxt extends React.Component {


    state = {
        isLongTxtShown: false
    }
    // componentDidMount() {
    //     const {text} = this.props;
    //     // this.props.text;
    //     // this.state.books;
    //     // const {text} = this.props; -> text;
    //     // const {books} = this.state; -> books;
    //     console.log("LongTxt -> componentDidMount -> text", text)
    // }

// let copyBooks = [...this.state.books] -> [...books]
// let copyBook = {...this.state.book, listPrice: {...this.state.book.listPrice}}

    getText = () => {
        const {text} = this.props;
        if (this.state.isLongTxtShown) {
            return text;
        } else {
            let tempTxt = text;
            tempTxt = tempTxt.split(' ');
            let shortTxt = tempTxt.splice(0, 100, 1).join(' ')
            shortTxt += '...'
            return shortTxt;
        }
    }
    changeIsLongTxtShown = () => {
        this.setState((prevState) => ({isLongTxtShown: !prevState.isLongTxtShown}))
        this.getText();
    }


    render() {
        const booksToShow = this.getText();

        return <div className="book-description">    
        <p>{this.getText()}</p>
        <p onClick={this.changeIsLongTxtShown} className="more-text">More...</p>
        </div>
    }
}

