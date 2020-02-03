import React from "react"
import { Jumbotron, Button } from "reactstrap"

const Post = (props) => (
	<div>
		<Jumbotron>
			<h1 className='display-3'>{props.title}</h1>
			<p className='lead'>{props.lead}</p>
			<hr className='my-2' />
			<p>{props.description}</p>
			<p className='lead'>
				<Button color='primary'>Les mer</Button>
			</p>
		</Jumbotron>
	</div>
)

export default Post
