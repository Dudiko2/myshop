import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/ItemGallery.module.css";

const ItemGallery = () => {
	return (
		<Container className={styles.Gallery}>
			<Row xs={1} sm={2} lg={3}>
				{[1, 2, 3, 4].map((val) => (
					<Item key={val} />
				))}
			</Row>
		</Container>
	);
};

const Item = () => {
	return (
		<Col>
			<div className={styles.card}>
				<Link href="/">
					<a>
						<div className={styles.imagecont}>
							<Image
								layout="responsive"
								alt="product"
								src="https://placeimg.com/640/480/any"
								height="560"
								width="635"
							/>
						</div>
					</a>
				</Link>
				<div className={styles.cardbody}>
					<h3>
						<Link href="/">name</Link>
					</h3>
					<span className={styles.price}>19.99</span>
				</div>
			</div>
		</Col>
	);
};

export default ItemGallery;
