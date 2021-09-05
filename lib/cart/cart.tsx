import { Dispatch } from "react";
import { amountInCart } from "./utils";
import type { Cart, CartItem, Action } from "./types";

/**
 * Creates an object that implements the Cart interface
 * @param items state provided by useReducer
 * @param dispatch update function provided by useReducer
 * @returns Cart object
 */
export const initCart = (
	items: CartItem[],
	dispatch: Dispatch<Action>
): Cart => {
	return {
		items,
		addToCart: (newItem: CartItem, quantity: number) =>
			dispatch({ type: "ADD_TO_CART", payload: { newItem, quantity } }),

		removeFromCart: (id: string | number, quantity: number) =>
			dispatch({ type: "REMOVE_FROM_CART", payload: { id, quantity } }),

		clearCart: () => dispatch({ type: "CLEAR_CART", payload: {} }),

		get size() {
			return amountInCart(items);
		},
	};
};
