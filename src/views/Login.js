import React from "react"
import {
	Container,
	Col,
	Row,
	Button,
	Form,
	FormGroup,
	FormText,
	Label,
	Input
} from "reactstrap"

class Login extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			email: "",
			password: ""
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
	}

	render() {
		return (
			<Container style={{ paddingTop: "70px" }}>
				<h1 className='display-4 text-primary'>Logg inn på |The Blog|</h1>
				<Row xs='2'>
					<Col>
						<Form onSubmit={this.handleSubmit}>
							<Row form>
								<Col md={6}>
									<FormGroup>
										<Label for='exampleEmail'>Epost</Label>
										<Input
											type='email'
											name='email'
											id='exampleEmail'
											placeholder='Epost'
										/>
									</FormGroup>
								</Col>
								<Col md={6}>
									<FormGroup>
										<Label for='examplePassword'>Passord</Label>
										<Input
											type='password'
											name='password'
											id='examplePassword'
											placeholder='Passord'
										/>
									</FormGroup>
								</Col>
								<Col>
									<FormGroup>
										<FormText color='muted'>
											Har du problemer med innlogging? Vennligst kontakt
											administrator for hjelp/brukerstøtte.
										</FormText>
									</FormGroup>
								</Col>
							</Row>
							<Button color='danger'>Logg inn</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Login
