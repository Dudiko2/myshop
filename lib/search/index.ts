import { useRouter } from "next/router";
import { getOneQueryParam } from "../utils";

export interface SearchQuery {
    [x: string]: string;
    q: string;
    sortby: string;
}

export const defaultSearchQuery: SearchQuery = {
    q: "",
    sortby: "TITLE",
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
