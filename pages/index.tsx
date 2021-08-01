import Head from "next/head";
import LayoutHero from "../wrappers/LayoutHero";
import ItemGallery from "../components/ItemGallery";
import { fetchProducts } from "../services/shopify";
import { FC } from "react";

interface HomeProps {
	products: any[];
}

const Home: FC<HomeProps> = ({ products }) => {
	return (
		<LayoutHero>
			<Head>
				<title>MYSHOP </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ItemGallery products={products} />
		</LayoutHero>
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
