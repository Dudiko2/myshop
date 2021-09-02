import { FC } from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/Section.module.css";

interface Props {
	title?: string;
}

const Section: FC<Props> = ({ title, children }) => {
	return (
		<Container fluid className={styles.section}>
			{title && <h2>{title}</h2>}
			{children}
		</Container>
	);
};

export default Section;
