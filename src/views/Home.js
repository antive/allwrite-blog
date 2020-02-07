import React from "react"
import _ from "lodash"
import { connect } from "react-redux"
import { getPosts } from "../actions/postAction"
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
		this.props.getPosts()
	}

	renderNotes() {
		return _.map(this.props.posts, (post, key) => {
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

function mapStateToProps(state, ownProps) {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps, { getPosts })(Home)
