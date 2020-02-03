import React from "react"
import { Container } from "reactstrap"

import LoginForm from "../components/LoginForm"

class Login extends React.Component {
	render() {
		return (
			<div>
				<Container>
					<h1>Hello, u need to login yo</h1>
					<LoginForm />
				</Container>
			</div>
		)
	}
}

export default Login
