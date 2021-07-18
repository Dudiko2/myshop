import Head from "next/head";
import Layout from "../hoc/Layout";
import Hero from "../components/Hero";
import ItemGallery from "../components/ItemGallery";

const Home = () => {
	return (
		<Layout>
			<Head>
				<title>MYSHOP </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
			<ItemGallery />
		</Layout>
	);
};

export default Home;
