import Head from "next/head";
import Layout from "../hoc/Layout";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>MYSHOP </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</Layout>
	);
}
