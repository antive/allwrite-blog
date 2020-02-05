import React from "react"
import { database } from "../database/firebase"
import {
	Container,
	Row,
	Col,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText
} from "reactstrap"

class Creator extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: "",
			body: ""
		}
	}

	// handle change
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	// handle submit
	handleSubmit = (event) => {
		event.preventDefault()
		const post = {
			title: this.state.title,
			body: this.state.body
		}
		database.push(post)
		this.setState({
			title: "",
			body: ""
		})
	}

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<Form onSubmit={this.handleSubmit}>
							<h1 className='display-4'>Ny bloggpost</h1>
							<FormGroup>
								<Label for='postTitle'>Tittel</Label>
								<Input
									type='text'
									name='title'
									id='postTitle'
									placeholder='Tittel...'
									required
									onChange={this.handleChange}
									value={this.state.title}
								/>
							</FormGroup>
							<FormGroup>
								<Label for='bodyText'>Beskrivelse/blog</Label>
								<Input
									type='textarea'
									name='body'
									id='bodyText'
									placeholder='Beskrivelse...'
									required
									onChange={this.handleChange}
									value={this.state.body}
								/>
							</FormGroup>
							<FormGroup>
								<Label for='imageFile'>Bildefil</Label>
								<Input type='file' name='file' id='imageFile' />
								<FormText color='muted'>
									Sjekk over skrivefeil osv, før du poster på bloggen!
								</FormText>
							</FormGroup>
							<Button color='info'>Post</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Creator
