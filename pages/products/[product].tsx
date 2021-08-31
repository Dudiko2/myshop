import { GetStaticPaths, GetStaticProps } from "next";
import { FC, useState } from "react";
import { Container } from "react-bootstrap";
import Head from "next/head";
import Layout from "../../wrappers/Layout";
import Section from "../../wrappers/Section";
import Breadcrumbs, { Crumb } from "../../components/Breadcrumbs";
import ProductPageMain from "../../components/ProductPageMain";
import { fetchProductByHandle, fetchProducts } from "../../services/shopify";

interface ProductProps {
	product: ShopifyBuy.Product;
	breadcrumbs: Crumb[];
}

const Product: FC<ProductProps> = ({ product, breadcrumbs }) => {
	const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
	const variants = product.variants;

	const setVariantById = (id: string | number) => {
		const wantedVariant = variants.find((v) => v.id === id);

		if (wantedVariant) setSelectedVariant(wantedVariant);
	};

	return (
		<Layout>
			<Head>
				<title>MYSHOP - {product.title}</title>
			</Head>
			<Breadcrumbs crumbs={breadcrumbs} />

			<Section>
				<ProductPageMain
					selectedVariant={selectedVariant}
					setVariant={setVariantById}
					title={product.title}
					description={product.description}
					variants={variants}
				/>
			</Section>
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const products = await fetchProducts(100);

	const paths = products.map((p: any) => ({
		params: { product: `${p.handle}` },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
	const product = await fetchProductByHandle(params.product);
	const breadcrumbs: Crumb[] = [
		{
			pageName: "Home",
			path: "/",
		},
		{
			pageName: "Products",
			path: "/products/",
		},
		{
			pageName: product.title,
		},
	];

	return {
		props: { product, breadcrumbs },
		revalidate: 60,
	};
};

export default Product;
