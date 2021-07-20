import Head from "next/head";
import Layout from "../hoc/Layout";
import Hero from "../components/Hero";
import ItemGallery from "../components/ItemGallery";
import { fetchProducts } from "../services/shopify";
import { FC } from "react";

interface HomeProps {
	products: any[];
}

const Home: FC<HomeProps> = ({ products }) => {
	return (
		<Layout>
			<Head>
				<title>MYSHOP </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
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
