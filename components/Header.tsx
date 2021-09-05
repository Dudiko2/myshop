import { Navbar, Nav } from "react-bootstrap";
import { FC, useState, useEffect, CSSProperties } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import IconBag from "./IconBag";
import { useCart } from "../lib/cart/index";

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
			if (window.scrollY > 20) {
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
				<Navbar.Brand className={styles.Brand}>MYSHOP</Navbar.Brand>
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
			</div>
			<Backdrop show={isOpen} closeFunc={() => setIsOpen(false)} />
			<div className={styles.buttonGroup}>
				<IconBag
					className={styles.bagIcon}
					height={"1.6rem"}
					amountInBag={cart.size}
				/>
				<Navbar.Toggle className={styles.toggleButton} onClick={toggleMenu} />
			</div>
		</Navbar>
	);
};

interface BackdropProps {
	show: boolean;
	zIndex?: number;
	closeFunc: any;
}

const Backdrop: FC<BackdropProps> = ({ show, zIndex = 0, closeFunc }) => {
	const display = show ? "block" : "none";
	const styleObj: CSSProperties = {
		position: "fixed",
		top: "0",
		left: "0",
		right: "0",
		bottom: "0",
		backgroundColor: "black",
		opacity: 0.1,
	};

	return (
		<div onClick={closeFunc} style={{ display, zIndex, ...styleObj }}></div>
	);
};

export default Header;
