import Client from "shopify-buy";

const client = Client.buildClient({
	domain: process.env.STOREFRONT_DOMAIN || "",
	storefrontAccessToken: process.env.STOREFRONT_TOKEN || "",
});

const fetchProducts = async (num?: number) => {
	const res = await client.product.fetchAll(num);
	return normalizeResponse(res);
};

const fetchProductByHandle = async (handle: string) => {
	const res = await client.product.fetchByHandle(handle);
	return normalizeResponse(res);
};

// helper function
const normalizeResponse = (res: any) => {
	return JSON.parse(JSON.stringify(res));
};

export { fetchProducts, fetchProductByHandle };
export default client;
