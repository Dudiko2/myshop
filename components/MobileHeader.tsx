import { FC, useState, CSSProperties } from "react";
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";
import SearchBar from "./SearchBar";
import IconBag from "./IconBag";
import { useCart } from "../lib/cart";
import styles from "../styles/MobileHeader.module.css";

// NOTE: Revise links

const MobileHeader: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cart = useCart();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Navbar expand="lg" className={`${styles.Navbar} `}>
            <Container>
                <Link passHref href="/">
                    <Navbar.Brand className={styles.Brand}>MYSHOP</Navbar.Brand>
                </Link>

                <div
                    className={`${styles.collapseable} ${
                        isOpen ? styles.show : ""
                    }`}
                >
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
                <div className={styles.buttonGroup}>
                    <IconBag
                        className={styles.bagIcon}
                        height={"1.6rem"}
                        amountInBag={cart.size}
                    />
                    <Navbar.Toggle
                        className={styles.toggleButton}
                        onClick={toggleMenu}
                    />
                </div>
                <Backdrop show={isOpen} closeFunc={() => setIsOpen(false)} />
            </Container>
            <Container id={styles.searchCont}>
                <form
                    action="/products"
                    className={styles.SearchForm}
                    autoComplete="off"
                >
                    <SearchBar
                        wrapperClassName={styles.SearchBarWrapper}
                        inputClassName={styles.SearchBar}
                        predictive
                    />
                </form>
            </Container>
        </Navbar>
    );
};

interface BackdropProps {
    show: boolean;
    zIndex?: number;
    closeFunc: () => void;
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

export default MobileHeader;
