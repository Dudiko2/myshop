import { createContext, useReducer } from "react";
import { initCart } from "./cart";
import { reducer, initialState } from "./state";
import type { FC } from "react";
import type { Cart } from "./types";

export const cartContext = createContext({} as Cart);
cartContext.displayName = "Cart";

export const CartProvider: FC = ({ children }) => {
	const [items, dispatch] = useReducer(reducer, initialState);
	const cart = initCart(items, dispatch);

	return <cartContext.Provider value={cart}>{children}</cartContext.Provider>;
};
