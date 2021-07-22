import Head from "next/head";
import Layout from "../../hoc/Layout";
import { fetchProductByHandle, fetchProducts } from "../../services/shopify";
import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";

interface ProductProps {
	product: any;
}

const Product: FC<ProductProps> = ({ product }) => {
	return (
		<Layout>
			<Head>
				<title>MYSHOP - {product.title}</title>
			</Head>
			<div>{product.title}</div>
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const products = await fetchProducts(100);

	const paths = products.map((p: any) => ({
		params: { handle: `${p.handle}` },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
	const product = await fetchProductByHandle(params.handle);

	return {
		props: { product },
	};
};

export default Product;
