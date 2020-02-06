import React from "react"
import { database } from "../database/firebase"
import _ from "lodash"
import { Container, Row, Col, Jumbotron, Button } from "reactstrap"

import Post from "../components/Post"

class Home extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			posts: {}
		}

		this.renderNotes = this.renderNotes.bind(this)
	}

	componentDidMount() {
		database.on("value", (snapshot) => {
			this.setState({
				posts: snapshot.val()
			})
		})
	}

	renderNotes() {
		return _.map(this.state.posts, (post, key) => {
			return (
				<Col xs='6' key={key}>
					<Post title={post.title} body={post.body} />
				</Col>
			)
		})
	}

	render() {
		return (
			<Container style={{ paddingTop: "70px" }}>
				<Row>{this.renderNotes()}</Row>
			</Container>
		)
	}
}

export default Home
