import Client from "shopify-buy";

/* Extended type since the original is lacking */
export type ShopifyProduct = ShopifyBuy.Product & { handle: string };

const client = Client.buildClient({
	domain: process.env.STOREFRONT_DOMAIN || "",
	storefrontAccessToken: process.env.STOREFRONT_TOKEN || "",
});

type RequestFunction<P, T> = (args: P) => Promise<T>;

// helper function, wrap requests with it
const normalizeResponse =
	<P, T>(f: RequestFunction<P, T>) =>
	async (args: P) => {
		const res = await f(args);
		const normalizedRes: T = JSON.parse(JSON.stringify(res));
		return normalizedRes;
	};

export const fetchProducts = normalizeResponse(
	async (params: { num?: number }) => {
		return await client.product.fetchAll(params.num);
	}
);

export const fetchProductByHandle = normalizeResponse(
	async (params: { handle: string }) => {
		return await client.product.fetchByHandle(params.handle);
	}
);

export const fetchProductsAndSortBy = normalizeResponse(
	async (params: {
		queryString: string;
		sortKey: string;
		reverse?: boolean;
	}) => {
		return await client.product.fetchQuery({
			query: params.queryString,
			// @ts-ignore stupid typedef is wrong
			sortKey: params.sortKey,
			reverse: params.reverse,
		});
	}
);

const shopifyClient = {
	fetchProducts,
	fetchProductByHandle,
	fetchProductsAndSortBy,
};

export default shopifyClient;
