import { Navbar, Nav, Container } from "react-bootstrap";
import { FC, useState, useEffect } from "react";
import Link from "next/link";
import MobileHeader from "./MobileHeader";
import IconBag from "./IconBag";
import { useCart } from "../lib/cart";
import SearchBar from "./SearchBar";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

interface Props {
    withHero: boolean;
}

const Header: FC<Props> = ({ withHero }) => {
    const [header, setHeader] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        // hardcoded value: big no-no
        const isMobile = () => window.innerWidth < 992;

        const handleResize = () => {
            if (isMobile()) {
                setHeader(() => <MobileHeader />);
            } else {
                setHeader(() => <DesktopHeader withHero={withHero} />);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [router.isReady, withHero]);

    return header;
};

// NOTE: Revise links

const DesktopHeader: FC<Props> = ({ withHero }) => {
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

    return (
        <Navbar
            expand="lg"
            className={`${styles.Navbar} ${isScrolled ? styles.scrolled : ""} ${
                withHero ? styles.withHero : ""
            }`}
        >
            <Container className={styles.cont}>
                <Link passHref href="/">
                    <Navbar.Brand className={styles.Brand}>MYSHOP</Navbar.Brand>
                </Link>
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
                <div className={styles.buttonGroup}>
                    <IconBag
                        className={styles.bagIcon}
                        height={"1.6rem"}
                        amountInBag={cart.size}
                    />
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;
