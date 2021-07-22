import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FC } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

// NOTE: Revise links

const Header: FC = () => {
	return (
		<Navbar expand="lg" className={`${styles.Navbar}`}>
			<Link passHref href="/">
				<Navbar.Brand>MYSHOP</Navbar.Brand>
			</Link>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<div className={styles.collapseable}>
					<Nav className={`${styles.Navlinks} capitalize`}>
						<Nav.Item>
							<Link passHref href="/">
								<Nav.Link>collections</Nav.Link>
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link>about</Nav.Link>
						</Nav.Item>
					</Nav>
					<Form inline>
						<div className={`input-cont`}>
							<FormControl type="text" placeholder="Search" />
							<Button>B</Button>
						</div>
					</Form>
				</div>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
