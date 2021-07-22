import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/ItemGallery.module.css";

interface GalleryProps {
	products: any[];
}

const ItemGallery: FC<GalleryProps> = ({ products }) => {
	return (
		<Container className={styles.Gallery}>
			<Container>
				<Row xs={1} sm={2} lg={3}>
					{products.map((p) => (
						<Item key={p.id} product={p} />
					))}
				</Row>
			</Container>
		</Container>
	);
};

const Item = ({ product }: any) => {
	const { title, images, handle } = product;
	const path = `/products/${handle}`;

	return (
		<Col>
			<div className={styles.card}>
				<Link href={path}>
					<a>
						<div className={styles.imagecont}>
							<Image
								layout="responsive"
								alt="product"
								src={images[0].src}
								height="560"
								width="635"
							/>
						</div>
					</a>
				</Link>
				<div className={styles.cardbody}>
					<Link href={path}>{title}</Link>
					{/* <span className={styles.price}>19.99</span> */}
				</div>
			</div>
		</Col>
	);
};

export default ItemGallery;
