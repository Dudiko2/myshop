import { useCallback, useState } from "react";
import { ShopifyProduct } from "../../services/shopify";

type UsePredictiveSearch = () => [ShopifyProduct[], (query: string) => void];

export const usePredictiveSearch: UsePredictiveSearch = () => {
    const [suggestions, setSuggestions] = useState<ShopifyProduct[]>([]);
    const [timeoutID, setTimeoutID] = useState(0);

    // consider using SWR
    const predict = useCallback((query: string, tid: number) => {
        if (tid) clearTimeout(tid);

        const id = window.setTimeout(async () => {
            if (query.length)
                try {
                    const result = await fetch(
                        `/api/suggestions?q=${query}&sortBy=${"RELEVANCE"}`
                    );
                    const products = await result.json();

                    setSuggestions(products);
                } catch (e) {
                    setSuggestions([]);
                }
            else setSuggestions([]);
        }, 200);

        setTimeoutID(id);
    }, []);

    return [suggestions, (query: string) => predict(query, timeoutID)];
};
