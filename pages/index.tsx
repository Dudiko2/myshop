import Head from "next/head";
import Layout from "../wrappers/Layout";
import ItemGallery from "../components/ItemGallery";
import { fetchProducts } from "../services/shopify";
import { FC } from "react";
import type { ShopifyProduct } from "../services/shopify";

interface HomeProps {
	products: ShopifyProduct[];
}

const Home: FC<HomeProps> = ({ products }) => {
	console.log(products[0]);

	return (
		<Layout showHero>
			<Head>
				<title>MYSHOP </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ItemGallery products={products} />
		</Layout>
	);
};

export const getStaticProps = async () => {
	const products = await fetchProducts(9);

	return {
		props: {
			products,
		},
	};
};

export default Home;
