import Head from "next/head";
import { GetServerSideProps } from "next";
import { FC } from "react";
import { fetchProductsAndSortBy, ShopifyProduct } from "../../services/shopify";
import Layout from "../../wrappers/Layout";

interface Props {
	products: ShopifyProduct[];
}

const Products: FC<Props> = ({ products }) => {
	return (
		<Layout>
			<Head>
				<title>Products</title>
			</Head>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				{products.map((p) => (
					<div style={{ padding: ".2rem 0" }} key={p.id}>
						{p.title}
						<strong>{p.selectedVariant}</strong>
					</div>
				))}
			</div>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const querystring =
		query?.querystring?.constructor === Array
			? query.querystring[0]
			: (query.querystring as string);

	const products = await fetchProductsAndSortBy({
		queryString: querystring || "",
		sortKey: "TITLE",
	});

	return {
		props: {
			products,
		},
	};
};

export default Products;
