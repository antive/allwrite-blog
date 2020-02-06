import React from "react"
import { Jumbotron, Button } from "reactstrap"

const Post = (props) => (
	<div>
		<Jumbotron>
			<h1 className='display-4 text-info'>{props.title}</h1>
			<hr className='my-2' />
			<p>{props.body}</p>
			<p className='lead'>
				<Button color='warning'>Les mer</Button>
			</p>
		</Jumbotron>
	</div>
)

export default Post
