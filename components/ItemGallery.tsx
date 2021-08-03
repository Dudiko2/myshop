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
			<Link href={path}>
				<a>
					<div className={styles.card}>
						<div className={styles.imagecont}>
							<Image
								layout="responsive"
								alt="product"
								src={images[0].src}
								height="560"
								width="635"
							/>
						</div>

						<div className={styles.cardbody}>
							{title}
							{/* <span className={styles.price}>19.99</span> */}
						</div>
					</div>
				</a>
			</Link>
		</Col>
	);
};

export default ItemGallery;
