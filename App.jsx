const Router = ReactRouterDOM.HashRouter
const { Switch, Route } = ReactRouterDOM
import { BookApp } from './pages/BookApp.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Header } from './cmps/AppHeader.jsx'
import { BookDetails } from './cmps/BookDetails.jsx'



export class App extends React.Component {

    render() {

        return (
            <Router>
                <div>
                    <Header />
                    <Switch>

                        <Route component={BookDetails} path="/book/:bookId" />
                        <Route component={BookApp} path="/book" />
                        <Route component={About} path="/about" />
                        <Route component={Home} path="/" />

                    </Switch>
                </div>
            </Router>
        )
    }
}
