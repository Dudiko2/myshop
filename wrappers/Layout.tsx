import { FC, ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Layout.module.css";

interface Props {
	children?: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<div className={styles.Layout}>
			<Header />
			<div>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
