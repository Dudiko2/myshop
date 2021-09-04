import { FC, createContext, useState, useContext } from "react";

export interface CartItem extends ShopifyBuy.ProductVariant {
	parentTitle: string;
	quantity: number;
}

export interface Cart {
	items: CartItem[];
	addToCart: (newItem: CartItem, quantity: number) => void;
	removeFromCart: (id: string | number, quantity: number) => void;
	clearCart: () => void;
	size: () => number;
}

// --------------------------------------------------
const cartContext = createContext({} as Cart);
cartContext.displayName = "Cart";

export const CartProvider: FC = ({ children }) => {
	const [items, setItems] = useState<CartItem[]>([]);

	const addToCart = (newItem: CartItem, quantity: number) => {
		if (quantity <= 0) return;

		const copy = copyCartItems(items);
		const item = findCartItemById(copy, newItem.id);

		if (item) {
			item.quantity += quantity;
		} else {
			newItem.quantity = quantity;
			copy.push(newItem);
		}

		setItems(copy);
	};

	const removeFromCart = (id: string | number, quantity: number) => {
		const itemIndex = items.findIndex((i) => i.id === id);
		let copy: CartItem[];

		if (itemIndex === -1 || quantity <= 0) return;

		copy = copyCartItems(items);
		if (copy[itemIndex].quantity <= quantity) {
			copy.splice(itemIndex, 1);
		} else {
			copy[itemIndex].quantity -= quantity;
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
		removeFromCart,
		clearCart,
		size,
	};

	return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

// ----------------------------------------------------
const copyCartItems = (items: CartItem[]) =>
	items.map((i) => {
		const item: CartItem = { ...i };

		return item;
	});

const findCartItemById = (items: CartItem[], id: string | number) => {
	return items.find((i) => i.id === id);
};

const amountInCart = (items: CartItem[]) => {
	const sum = items.reduce((total, item) => {
		return total + item.quantity;
	}, 0);

	return sum;
};

// -----------------------------------------------
export const useCart = (): Cart => {
	return useContext(cartContext);
};
