import { FC } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import InputSelect from "./InputSelect";
import { useCart } from "../lib/cart/cart";
import styles from "../styles/ProductPageMain.module.css";

interface ProductPageMainProps {
	selectedVariant: ShopifyBuy.ProductVariant;
	title: string;
	description: string;
	variants?: ShopifyBuy.ProductVariant[];
}

const ProductPageMain: FC<ProductPageMainProps> = ({
	selectedVariant,
	title,
	description,
	variants,
}) => {
	const cart = useCart();
	// @ts-ignore
	const altText = selectedVariant.image.altText;
	// @ts-ignore
	const currencyCode = selectedVariant.priceV2.currencyCode;

	return (
		<Container>
			<Row className={styles.mainRow}>
				<Col>
					<div className={styles.box}>
						<Image
							layout="responsive"
							src={selectedVariant.image.src}
							alt={altText || "product variant"}
							height="560"
							width="635"
						/>
					</div>
				</Col>
				<Col>
					<Container className={`${styles.productDetails} ${styles.box}`}>
						<Row>
							<Col>
								<h1>{title}</h1>
								<span>{`${currencyCode} ${selectedVariant.price}`}</span>
							</Col>
						</Row>
						<p className={styles.desc}>{description}</p>

						<div className={styles.buttons}>
							{variants && (
								<InputSelect>
									{variants.map((v) => {
										return (
											<InputSelect.Option
												key={v.id}
												text={v.title}
												value={v.title}
											/>
										);
									})}
								</InputSelect>
							)}
							<AddToCartButton
								onClick={() => cart.addToCart(selectedVariant.id, 1)}
							/>
						</div>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

interface ButtonProps {
	onClick?: (arg: any) => any;
}

const AddToCartButton: FC<ButtonProps> = ({ onClick }) => {
	return (
		<Button onClick={onClick} className={styles.atc}>
			add to cart
		</Button>
	);
};

export default ProductPageMain;
