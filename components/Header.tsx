import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FC, useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

// NOTE: Revise links

const Header: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				if (!isScrolled) setIsScrolled(true);
			} else {
				if (isScrolled) setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isScrolled]);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Navbar
			expand="lg"
			className={`${styles.Navbar} ${isScrolled ? styles.scrolled : ""}`}
		>
			<Link passHref href="/">
				<Navbar.Brand>MYSHOP</Navbar.Brand>
			</Link>
			<div className={`${styles.collapseable} ${isOpen ? styles.show : ""}`}>
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
			<Navbar.Toggle className={styles.toggleButton} onClick={toggleMenu} />
		</Navbar>
	);
};

export default Header;
