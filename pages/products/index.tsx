import Head from "next/head";
import { GetServerSideProps } from "next";
import { FC } from "react";
import { fetchProductsAndSortBy, ShopifyProduct } from "../../services/shopify";
import Layout from "../../wrappers/Layout";
import ItemGallery from "../../components/ItemGallery";
import { searchKeys } from "../../components/SearchBar";

interface Props {
	products: ShopifyProduct[];
	querystring: string;
}

const Products: FC<Props> = ({ products, querystring = null }) => {
	// note: add support for pagination

	return (
		<Layout>
			<Head>
				<title>Products</title>
			</Head>
			{products.length ? (
				<ItemGallery products={products} />
			) : (
				`No results for '${querystring}'`
			)}
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const querystring = getOneQueryParam(query[searchKeys.QUERY]) || "";
	const sortKey =
		getOneQueryParam(query[searchKeys.SORT_KEY])?.toUpperCase() || "TITLE";

	const products = await fetchProductsAndSortBy({
		queryString: querystring,
		sortKey: sortKey,
	});

	return {
		props: {
			products,
			querystring,
		},
	};
};

const getOneQueryParam = (param?: string | Array<string>) => {
	if (!param) return null;

	return param?.constructor === Array ? param[0] : (param as string);
};

export default Products;
