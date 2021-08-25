import { FC, createContext, useState, useContext } from "react";

export interface CartItem {
	id: string | number;
	quantity: number;
}

export interface Cart {
	items: CartItem[];
	addToCart: (id: string | number, quantity: number) => void;
	clearCart: () => void;
	size: () => number;
}

const cartContext = createContext({} as Cart);
cartContext.displayName = "Cart";

export const CartProvider: FC = ({ children }) => {
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

	const size = () => {
		return amountInCart(items);
	};

	const value = {
		items,
		addToCart,
		clearCart,
		size,
	};

	return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

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

const amountInCart = (items: CartItem[]) => {
	const sum = items.reduce((total, item) => {
		return total + item.quantity;
	}, 0);

	return sum;
};

export const useCart = () => {
	return useContext(cartContext);
};
