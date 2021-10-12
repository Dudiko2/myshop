import { useCallback, useState } from "react";
import { ShopifyProduct } from "../../services/shopify";

type UsePredictiveSearch = () => {
    suggestions: ShopifyProduct[];
    loading: boolean;
    predict: (query: string) => void;
};

export const usePredictiveSearch: UsePredictiveSearch = () => {
    const [suggestions, setSuggestions] = useState<ShopifyProduct[]>([]);
    const [timeoutID, setTimeoutID] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    // consider using SWR
    const predict = useCallback((query: string, tid: number) => {
        if (tid) clearTimeout(tid);

        const id = window.setTimeout(async () => {
            if (query.length)
                try {
                    setIsLoading(true);
                    const result = await fetch(
                        `/api/suggestions?q=${query}&sortBy=${"RELEVANCE"}`
                    );
                    const products = await result.json();

                    setSuggestions(products);
                } catch (e) {
                    setSuggestions([]);
                } finally {
                    setIsLoading(false);
                }
            else setSuggestions([]);
        }, 200);

        setTimeoutID(id);
    }, []);

    return {
        suggestions,
        loading: isLoading,
        predict: (query: string) => predict(query, timeoutID),
    };
};
