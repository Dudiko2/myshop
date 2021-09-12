import Head from "next/head";
import { GetServerSideProps } from "next";
import { FC } from "react";
import { fetchProductsAndSortBy, ShopifyProduct } from "../../services/shopify";
import Layout from "../../wrappers/Layout";
import ItemGallery from "../../components/ItemGallery";
import { searchKeys } from "../../components/SearchBar";

interface Props {
	products: ShopifyProduct[];
}

const Products: FC<Props> = ({ products }) => {
	return (
		<Layout>
			<Head>
				<title>Products</title>
			</Head>
			<ItemGallery products={products} />
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const querystring = getOneQueryParam(query[searchKeys.QUERY]);
	const sortKey = getOneQueryParam(query[searchKeys.SORT_KEY])?.toUpperCase();

	const products = await fetchProductsAndSortBy({
		queryString: querystring || "",
		sortKey: sortKey || "TITLE",
	});

	return {
		props: {
			products,
		},
	};
};

const getOneQueryParam = (param?: string | Array<string>) => {
	if (!param) return undefined;

	return param?.constructor === Array ? param[0] : (param as string);
};

export default Products;
