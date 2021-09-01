import { useRouter } from "next/router";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import styles from "../styles/Breadcrumbs.module.css";

export interface Crumb {
	pageName: string;
	path?: string;
}

interface Props {
	crumbs: Crumb[];
}

const Breadcrumbs: FC = () => {
	const crumbs = useBreadcrumbs();

	console.log(crumbs);

	if (crumbs.length <= 1) return null;

	const items = crumbs.map((c, index) => (
		<Link key={`${c.pageName}-${c.path}`} href={c.path || "#"} passHref>
			<Breadcrumb.Item
				className={styles.crumb}
				active={index === crumbs.length - 1}
			>
				{c.pageName.toUpperCase()}
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

const useBreadcrumbs = () => {
	const router = useRouter();
	const [crumbs, setCrumbs] = useState<Crumb[]>([]);

	useEffect(() => {
		if (router.isReady) {
			let href = "/";
			const pathname = window.location.pathname;
			const pathArray = pathname !== "/" ? pathname.split("/") : pathname;
			const temp: Crumb[] = [
				{
					pageName: "home",
					path: href,
				},
			];

			for (let i = 1; i < pathArray.length; i++) {
				href += `${pathArray[i]}/`;
				const c = {
					pageName: pathArray[i],
					path: href,
				};

				temp.push(c);
			}

			setCrumbs(temp);
		}
	}, [router.isReady]);

	return crumbs;
};

export default Breadcrumbs;
