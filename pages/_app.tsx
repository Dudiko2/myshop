import type { AppProps } from "next/app";
import { CartProvider } from "../lib/cart/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import usePageTransition from "../hooks/usePageTransition";
import LoadScreen from "../components/LoadScreen";

function MyApp({ Component, pageProps }: AppProps) {
    const isLoading = usePageTransition();

    return (
        <CartProvider>
            {isLoading ? <LoadScreen /> : <Component {...pageProps} />}
        </CartProvider>
    );
}
export default MyApp;
