import React from "react"
import { Link } from "react-router-dom"
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"

const LoginForm = (props) => {
	return (
		<Form>
			<FormGroup>
				<Label for='exampleEmail'>Epost</Label>
				<Input
					type='email'
					name='email'
					id='exampleEmail'
					placeholder='Skriv inn epost'
				/>
			</FormGroup>
			<FormGroup>
				<Label for='examplePassword'>Passord</Label>
				<Input
					type='password'
					name='password'
					id='examplePassword'
					placeholder='Ditt passord'
				/>
			</FormGroup>
			<FormGroup>
				<FormText>
					Innlogging er bare for gruppemedlemmer. Vil du lese bloggen?{" "}
					<Link to='/'>Til bloggen</Link>
				</FormText>
			</FormGroup>
			<Button>Logg inn</Button>
		</Form>
	)
}

export default LoginForm
