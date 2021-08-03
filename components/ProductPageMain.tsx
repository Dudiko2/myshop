import { FC } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/ProductPageMain.module.css";
import InputSelect from "./InputSelect";

interface ProductPageMainProps {
	title: string;
	description: string;
	imgSrc?: string;
	imgAlt?: string;
	price?: number | string;
	currency?: string;
	variants?: any[];
}

const ProductPageMain: FC<ProductPageMainProps> = ({
	title,
	description,
	imgSrc = "",
	imgAlt,
	price,
	currency,
	variants,
}) => {
	return (
		<Container>
			<Row className={styles.mainRow}>
				<Col>
					<div className={styles.imgBox}>
						<Image
							layout="responsive"
							src={imgSrc}
							alt={imgAlt || "product variant"}
							height="560"
							width="635"
						/>
					</div>
				</Col>
				<Col>
					<Container className={styles.productDetails}>
						<Row>
							<Col>
								<h1>{title}</h1>
								<span>{`${currency} ${price}`}</span>
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
							<Button>add to cart</Button>
						</div>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductPageMain;
