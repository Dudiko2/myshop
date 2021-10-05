import type { AppProps } from "next/app";
import { CartProvider } from "../lib/cart/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    );
}
export default MyApp;
