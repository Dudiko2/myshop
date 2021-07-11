import Head from "next/head";
import Layout from "../hoc/Layout";
import Hero from "../components/Hero";

const Home = () => {
	return (
		<Layout>
			<Head>
				<title>MYSHOP </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
		</Layout>
	);
};

export default Home;
