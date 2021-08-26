import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FC, useState, useEffect } from "react";
import Link from "next/link";
import InputContainer from "../wrappers/InputContainer";
import styles from "../styles/Header.module.css";
import IconBag from "./IconBag";
import { useCart } from "../lib/cart/cart";

// NOTE: Revise links

interface Props {
	withHero: boolean;
}

const Header: FC<Props> = ({ withHero }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const cart = useCart();

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
			className={`${styles.Navbar} ${isScrolled ? styles.scrolled : ""} ${
				withHero ? styles.withHero : ""
			}`}
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
					<InputContainer>
						<FormControl type="text" placeholder="Search" />
						<Button>B</Button>
					</InputContainer>
				</Form>
			</div>
			<IconBag
				className={styles.bagIcon}
				height={"1.6rem"}
				amountInBag={cart.size()}
			/>
			<Navbar.Toggle className={styles.toggleButton} onClick={toggleMenu} />
		</Navbar>
	);
};

export default Header;
