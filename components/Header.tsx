import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FC } from "react";
import styles from "../styles/Header.module.css";

const Header: FC = () => {
	return (
		<Navbar fixed="top" className={styles.Navbar}>
			<Nav>
				<Navbar.Brand>MYSHOP</Navbar.Brand>
				<Nav.Item>
					<Nav.Link>Collections</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link>About</Nav.Link>
				</Nav.Item>
			</Nav>
			<Form inline>
				<div className={styles.searchContainer}>
					<FormControl type="text" placeholder="Search" />
					<Button>B</Button>
				</div>
			</Form>
		</Navbar>
	);
};

export default Header;
