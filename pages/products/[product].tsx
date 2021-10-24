import { GetStaticPaths, GetStaticProps } from "next";
import { FC, useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../../wrappers/Layout";
import Section from "../../wrappers/Section";
import ProductPageMain from "../../components/ProductPageMain";
import { fetchProductByHandle, fetchProducts } from "../../services/shopify";
import { getOneQueryParam } from "../../lib/utils";

interface ProductProps {
    product: ShopifyBuy.Product;
}

const Product: FC<ProductProps> = ({ product }) => {
    const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
    const variants = product.variants;

    const setVariantById = (id: string | number) => {
        const wantedVariant = variants.find((v) => v.id === id);

        if (wantedVariant) setSelectedVariant(wantedVariant);
    };

    useEffect(() => {
        setSelectedVariant(product.variants[0]);
    }, [product]);

    return (
        <Layout>
            <Head>
                <title>MYSHOP - {product.title}</title>
            </Head>
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
    const products = await fetchProducts({ num: 100 });

    const paths = products.map((p) => ({
        params: { product: `${p.handle}` },
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const handle = getOneQueryParam(params?.product);
    const product = handle ? await fetchProductByHandle({ handle }) : null;

    if (!product)
        return {
            notFound: true,
        };

    return {
        props: { product },
        revalidate: 60,
    };
};

export default Product;
