import { FC } from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/Section.module.css";

const Section: FC = ({ children }) => {
	return (
		<Container fluid className={styles.section}>
			{children}
		</Container>
	);
};

export default Section;
