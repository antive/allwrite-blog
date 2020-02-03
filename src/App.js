import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components & Views
import Navbar from "./components/Navbar"
import Home from "./views/Home"
import Login from "./views/Login"
import Creator from "./views/Creator"

const App = () => (
	<React.Fragment>
		<Router>
			<Navbar />
			<Switch>
				<Route path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/creator' component={Creator} />
			</Switch>
		</Router>
	</React.Fragment>
)

export default App
