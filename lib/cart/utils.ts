import type { CartItem } from "./types";

export const copyCartItems = (items: CartItem[]) =>
	items.map((i) => {
		const item: CartItem = { ...i };

		return item;
	});

export const findCartItemById = (items: CartItem[], id: string | number) => {
	return items.find((i) => i.id === id);
};

export const amountInCart = (items: CartItem[]) => {
	const sum = items.reduce((total, item) => {
		return total + item.quantity;
	}, 0);

	return sum;
};
