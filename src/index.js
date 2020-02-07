import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/index.css"
import * as serviceWorker from "./serviceWorker"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers"
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom"

// Components & Views
import Navigation from "./components/Navigation"
import Loader from "./components/Loader"
import Authenticated from "./components/Authenticated"
import Home from "./views/Home"
import Login from "./views/Login"
import Creator from "./views/Creator"

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Navigation />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/creator' component={Creator} />
				<Route path='/login' component={Login} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById("root")
)

serviceWorker.unregister()
