
const { NavLink, withRouter } = ReactRouterDOM

function _Header() {

    return <nav className="header">
        <h1>My Books</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/book">Book</NavLink>
    </nav>
}

export const Header = withRouter(_Header)