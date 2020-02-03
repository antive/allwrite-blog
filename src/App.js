import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components & Views
import Navigation from "./components/Navigation"
import Home from "./views/Home"
import Login from "./views/Login"
import Creator from "./views/Creator"

const App = () => (
	<React.Fragment>
		<Router>
			<Navigation />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/login' component={Login} />
				<Route path='/creator' component={Creator} />
			</Switch>
		</Router>
	</React.Fragment>
)

export default App
