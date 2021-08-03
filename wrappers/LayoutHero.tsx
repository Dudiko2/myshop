import { FC, ReactNode } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import styles from "../styles/Layout.module.css";

interface Props {
	children?: ReactNode;
}

const LayoutHero: FC<Props> = ({ children }) => {
	return (
		<div className={styles.Layout}>
			<Header />
			<Hero />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default LayoutHero;
