import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import CartProvider from "../wrappers/CartProvider";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<CartProvider>
			<Component {...pageProps} />
		</CartProvider>
	);
}
export default MyApp;
