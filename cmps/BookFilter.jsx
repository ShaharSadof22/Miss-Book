

export class BookFilter extends React.Component {

    state = {
        filterBy: ''
    }

    setFilter = (filterBy) => {
        console.log("BookFilter -> setFilter -> filterBy", filterBy)
        this.setState({ filterBy })
    }

    render() {
        return <form className="search-form">
            <input className="name-search" type="text" placeholder="Book Name" onChange={(ev) => {
                this.setFilter(ev.target.value)
            }} />
            <input className="price-search" type="text" placeholder="Maximum Price" />
            <button onClick={this.props.onSetFilter}>Search</button>
        </form>


    }
}
