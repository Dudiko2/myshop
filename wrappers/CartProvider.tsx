import { FC, useState } from "react";
import cartContext from "../contexts/Cart";
import type { CartItem } from "../types/cart";

const CartProvider: FC = ({ children }) => {
	const [items, setItems] = useState<CartItem[]>([]);

	const addToCart = (id: string | number, quantity: number) => {
		const copy = copyCartItems(items);
		const item = findCartItemById(copy, id);

		if (item) {
			item.quantity += quantity;
		} else {
			copy.push({ id, quantity });
		}

		setItems(copy);
	};

	const clearCart = () => {
		setItems([]);
	};

	const value = {
		items,
		addToCart,
		clearCart,
	};

	return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

//--------move?------------------

const copyCartItems = (items: CartItem[]) => {
	const copy: CartItem[] = [];

	for (let i = 0; i < items.length; i++) {
		const item: CartItem = { ...items[i] };
		copy.push(item);
	}

	return copy;
};

const findCartItemById = (items: CartItem[], id: string | number) => {
	return items.find((i) => i.id === id);
};

export default CartProvider;
