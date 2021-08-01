import { GetStaticPaths, GetStaticProps } from "next";
import { FC, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../wrappers/Layout";
import Breadcrumbs, { Crumb } from "../../components/Breadcrumbs";
import { fetchProductByHandle, fetchProducts } from "../../services/shopify";
import { Col, Container, Row } from "react-bootstrap";
import ProductPageMain from "../../components/ProductPageMain";

interface ProductProps {
	product: any;
}

const Product: FC<ProductProps> = ({ product }) => {
	const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
	const variants: Array<any> = product.variants;
	const crumbs: Crumb[] = [
		{
			pageName: "Home",
			path: "/",
		},
		{
			pageName: "Products",
		},
		{
			pageName: product.title,
		},
	];

	// console
	console.log(product);

	return (
		<Layout>
			<Head>
				<title>MYSHOP - {product.title}</title>
			</Head>
			<Container fluid="sm">
				<Breadcrumbs crumbs={crumbs} />
			</Container>

			<Container fluid>
				<ProductPageMain
					title={product.title}
					description={product.description}
					imgSrc={selectedVariant.image.src}
					imgAlt={selectedVariant.image.altText}
					variants={variants}
					price={selectedVariant.price}
					currency={selectedVariant.priceV2.currencyCode}
				/>
			</Container>
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const products = await fetchProducts(100);

	const paths = products.map((p: any) => ({
		params: { product: `${p.handle}` },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
	const product = await fetchProductByHandle(params.product);

	return {
		props: { product },
	};
};

export default Product;
