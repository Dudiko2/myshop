import Head from "next/head";
import { GetServerSideProps } from "next";
import { FC } from "react";
import { fetchProductsAndSortBy, ShopifyProduct } from "../../services/shopify";
import Layout from "../../wrappers/Layout";
import ItemGallery from "../../components/ItemGallery";
import { getSearchQueryFromURL } from "../../lib/search";
import AdvancedSearch from "../../components/AdvancedSearch";

interface Props {
	products: ShopifyProduct[];
}

const Products: FC<Props> = ({ products }) => {
	// note: add support for pagination

	return (
		<Layout>
			<Head>
				<title>Products</title>
			</Head>
			<AdvancedSearch />
			<ItemGallery products={products} />
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const searchQuery = getSearchQueryFromURL(query);

	try {
		const products = await fetchProductsAndSortBy({
			queryString: searchQuery.q,
			sortKey: searchQuery.sortby,
		});

		return {
			props: {
				products,
			},
		};
	} catch (error) {
		return {
			redirect: { destination: "/products", permanent: false },
		};
	}
};

export default Products;
