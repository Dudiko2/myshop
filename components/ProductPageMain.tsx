import { FC, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import InputSelect from "./InputSelect";
import { useCart } from "../lib/cart/cart";
import styles from "../styles/ProductPageMain.module.css";

interface ProductPageMainProps {
	selectedVariant: ShopifyBuy.ProductVariant;
	setVariant: (id: string | number) => void;
	title: string;
	description: string;
	variants?: ShopifyBuy.ProductVariant[];
}

const ProductPageMain: FC<ProductPageMainProps> = ({
	selectedVariant,
	setVariant,
	title,
	description,
	variants,
}) => {
	const cart = useCart();
	const [amountToAdd, setAmountToAdd] = useState("1");
	// @ts-ignore
	const altText = selectedVariant.image.altText;
	// @ts-ignore
	const currencyCode = selectedVariant.priceV2.currencyCode;
	const price = selectedVariant.price;
	const originalPrice = selectedVariant.compareAtPrice;

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
						<h1>{title}</h1>
						<Price
							currencyCode={currencyCode}
							currentPrice={price}
							compareAtPrice={originalPrice}
						/>
						<p className={styles.desc}>{description}</p>
						<div className={styles.buttons}>
							{variants && (
								<InputSelect onInput={(e) => setVariant(e.target.value)}>
									{variants.map((v) => {
										return (
											<InputSelect.Option
												key={v.id}
												text={v.title}
												value={v.id}
											/>
										);
									})}
								</InputSelect>
							)}
							<AddToCartButton
								onClick={() =>
									cart.addToCart(selectedVariant.id, parseInt(amountToAdd))
								}
								amount={amountToAdd}
								onAmountChange={setAmountToAdd}
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
	amount: string;
	onAmountChange: any;
}

const AddToCartButton: FC<ButtonProps> = ({
	onClick,
	amount,
	onAmountChange,
}) => {
	return (
		<div className={styles.atcGroup}>
			<Button onClick={onClick} className={styles.atc}>
				add to cart
			</Button>
			<input
				className={styles.amount}
				type="number"
				name="amount"
				min="1"
				max="100"
				step="1"
				value={amount}
				onInput={(e) => onAmountChange((e.target as HTMLInputElement).value)}
			/>
		</div>
	);
};

interface PriceProps {
	currencyCode: string;
	currentPrice: string | number;
	compareAtPrice?: string | number;
}

const Price: FC<PriceProps> = ({
	currencyCode,
	currentPrice,
	compareAtPrice,
}) => {
	return (
		<div className={styles.Price}>
			{currencyCode}
			<span> {currentPrice} </span>
			{compareAtPrice && <del>{compareAtPrice}</del>}
		</div>
	);
};

export default ProductPageMain;
