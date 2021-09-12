import { copyCartItems, findCartItemById } from "./utils";
import type { Reducer } from "react";
import type { CartItem, Action } from "./types";

export const initialState: CartItem[] = [];

export const reducer: Reducer<CartItem[], Action> = (items, action) => {
	const copy = copyCartItems(items);
	let item: CartItem | undefined;
	let itemIndex = -1;

	switch (action.type) {
		case "ADD_TO_CART":
			if (action.payload.quantity <= 0) return items;

			item = findCartItemById(copy, action.payload.newItem.id);

			if (item) {
				item.quantity += action.payload.quantity;
			} else {
				action.payload.newItem.quantity = action.payload.quantity;
				copy.push(action.payload.newItem);
			}

			return copy;

		case "REMOVE_FROM_CART":
			itemIndex = items.findIndex((i) => i.id === action.payload.id);

			if (itemIndex === -1 || action.payload.quantity <= 0) return copy;

			if (copy[itemIndex].quantity <= action.payload.quantity) {
				copy.splice(itemIndex, 1);
			} else {
				copy[itemIndex].quantity -= action.payload.quantity;
			}

			return copy;

		case "CLEAR_CART":
			return [];

		default:
			return copy;
	}
};
