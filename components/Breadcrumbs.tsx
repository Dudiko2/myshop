import Link from "next/link";
import { FC } from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import styles from "../styles/Breadcrumbs.module.css";

export interface Crumb {
	pageName: string;
	path?: string;
}

interface Props {
	crumbs: Crumb[];
}

const Breadcrumbs: FC<Props> = ({ crumbs }) => {
	const items = crumbs.map((c, index) => (
		<Link key={`${c.pageName}-${c.path}`} href={c.path || "#"} passHref>
			<Breadcrumb.Item
				className={styles.crumb}
				active={index === crumbs.length - 1}
			>
				{c.pageName}
			</Breadcrumb.Item>
		</Link>
	));

	return (
		<Container fluid className={styles.wrapper}>
			<Container>
				<Breadcrumb className={styles.Breadcrumbs}>{items}</Breadcrumb>
			</Container>
		</Container>
	);
};

export default Breadcrumbs;
