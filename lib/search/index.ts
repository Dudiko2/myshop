import { useRouter } from "next/router";

export interface SearchQuery {
	[x: string]: string;
	q: string;
	sortby: string;
}

export const defaultSearchQuery: SearchQuery = {
	q: "",
	sortby: "TITLE",
};

const getOneQueryParam = (param?: string | Array<string>) => {
	if (!param) return null;

	return param?.constructor === Array ? param[0] : (param as string);
};

export const getSearchQueryFromURL = (query: any): SearchQuery => {
	const searchQuery = { ...defaultSearchQuery };

	for (const key in query) {
		if (key in searchQuery) {
			searchQuery[key] = getOneQueryParam(query[key]) || searchQuery[key];
		}
	}

	return searchQuery;
};

export const queryToString = (query: any): string => {
	const searchEntries = Object.entries(query);
	const pairs = searchEntries.map((e) => e.join("="));
	const qs = `?${pairs.join("&")}`;

	return qs;
};

export const useSearchQuery = (): SearchQuery => {
	const router = useRouter();
	const searchQuery = getSearchQueryFromURL(router.query);

	return searchQuery;
};
