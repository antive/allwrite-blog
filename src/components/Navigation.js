import React, { useState } from "react"
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from "reactstrap"

const Navigation = (props) => {
	const [collapsed, setCollapsed] = useState(true)

	const toggleNavbar = () => setCollapsed(!collapsed)

	return (
		<div>
			<Navbar color='light' light>
				<NavbarBrand href='/' className='mr-auto'>
					The Blog
				</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar} className='mr-2' />
				<Collapse isOpen={!collapsed} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink href='https://github.com/AllWrite-Bachelor'>
								GitHub
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/login'>Login</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/creator'>Creator</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	)
}

export default Navigation
