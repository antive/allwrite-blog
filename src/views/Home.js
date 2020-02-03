import React from "react"
import { Container, Row, Col } from "reactstrap"

import Post from "../components/Post"

const Home = () => (
	<Container>
		<Row>
			<Col xs='6'>
				<Post title='Hei!' lead='Noe tekst her tenker jeg!' description="Jaja, så var det jul i år også!" />
			</Col>
			<Col xs='6'>
				<Post />
			</Col>
		</Row>
	</Container>
)

export default Home
