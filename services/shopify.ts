import Client from "shopify-buy";

const client = Client.buildClient({
	domain: process.env.STOREFRONT_DOMAIN || "",
	storefrontAccessToken: process.env.STOREFRONT_TOKEN || "",
});

// helper function, move it
const normalizeResponse =
	(f: any) =>
	async (...args: any) => {
		const res = await f(...args);
		return JSON.parse(JSON.stringify(res));
	};

export const fetchProducts = normalizeResponse(async (num?: number) => {
	return await client.product.fetchAll(num);
});

export const fetchProductByHandle = normalizeResponse(
	async (handle: string) => {
		return await client.product.fetchByHandle(handle);
	}
);

const shopifyClient = { fetchProducts, fetchProductByHandle };

export default shopifyClient;
