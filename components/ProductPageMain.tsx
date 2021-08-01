import { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
			<Row>
				<Col>
					<Image
						layout="responsive"
						src={imgSrc}
						alt={imgAlt || "product variant"}
						height="560"
						width="635"
					/>
				</Col>
				<Col>
					<Container>
						<Row>
							<Col>
								<h1>{title}</h1>
								<span>{`${currency} ${price}`}</span>
							</Col>
						</Row>
						<Row>
							<Col>
								<p className={styles.desc}>{description}</p>
							</Col>
						</Row>
						{variants && (
							<Row>
								<Col>
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
								</Col>
							</Row>
						)}
						<Row>
							<Col>
								<button>add to cart</button>
							</Col>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductPageMain;
