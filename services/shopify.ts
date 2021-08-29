import Client from "shopify-buy";

/* Extended type since the original is lacking */
export type ShopifyProduct = ShopifyBuy.Product & { handle: string };

const client = Client.buildClient({
	domain: process.env.STOREFRONT_DOMAIN || "",
	storefrontAccessToken: process.env.STOREFRONT_TOKEN || "",
});

type RequestFunction<T> = (...args: any[]) => Promise<T>;
// helper function, move it
const normalizeResponse =
	<T>(f: RequestFunction<T>) =>
	async (...fargs: any[]) => {
		const res = await f(...fargs);
		const normalizedRes: T = JSON.parse(JSON.stringify(res));
		return normalizedRes;
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
