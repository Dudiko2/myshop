import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import type { ShopifyProduct } from "../services/shopify";
import styles from "../styles/ItemGallery.module.css";

interface GalleryProps {
	products: ShopifyProduct[];
}

interface ItemProps {
	product: ShopifyProduct;
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

const Item = ({ product }: ItemProps) => {
	const { title, images, handle } = product;
	const path = `/products/${handle}`;
	const firstVariant = product.variants[0];

	return (
		<Col>
			<Link href={path}>
				<a>
					<div className={styles.card}>
						<div>
							<Image
								layout="responsive"
								alt="product"
								src={images[0].src}
								height="560"
								width="635"
							/>
						</div>

						<div className={styles.cardbody}>
							<div className={styles.cardtitle}>{title}</div>
							<div className={styles.price}>{firstVariant.price}</div>
						</div>
					</div>
				</a>
			</Link>
		</Col>
	);
};

export default ItemGallery;
