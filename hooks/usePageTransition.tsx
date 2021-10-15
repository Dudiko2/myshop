import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const usePageTransition = (): boolean => {
    const [loadingState, setLoadingState] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const startHandler = () => setLoadingState(true);
        const endHandler = () => setLoadingState(false);

        router.events.on("routeChangeStart", startHandler);
        router.events.on("routeChangeComplete", endHandler);

        return () => {
            router.events.off("routeChangeStart", startHandler);
            router.events.off("routeChangeComplete", endHandler);
        };
    }, [router.events]);

    return loadingState;
};

export default usePageTransition;
