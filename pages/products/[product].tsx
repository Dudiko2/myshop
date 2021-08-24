import { GetStaticPaths, GetStaticProps } from "next";
import { FC, useState } from "react";
import { Container } from "react-bootstrap";
import Head from "next/head";
import Layout from "../../wrappers/Layout";
import Section from "../../wrappers/Section";
import Breadcrumbs, { Crumb } from "../../components/Breadcrumbs";
import ProductPageMain from "../../components/ProductPageMain";
import { fetchProductByHandle, fetchProducts } from "../../services/shopify";

interface ProductProps {
	product: ShopifyBuy.Product;
}

const Product: FC<ProductProps> = ({ product }) => {
	const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
	const variants = product.variants;
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

	return (
		<Layout>
			<Head>
				<title>MYSHOP - {product.title}</title>
			</Head>
			<Container fluid="sm">
				<Breadcrumbs crumbs={crumbs} />
			</Container>

			<Section>
				<ProductPageMain
					selectedVariant={selectedVariant}
					title={product.title}
					description={product.description}
					variants={variants}
				/>
			</Section>
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
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
	const product = await fetchProductByHandle(params.product);

	return {
		props: { product },
		revalidate: 60,
	};
};

export default Product;
