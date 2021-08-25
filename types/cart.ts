export interface CartItem {
	id: string | number;
	quantity: number;
}

export interface Cart {
	items: CartItem[];
	addToCart: (id: string | number, quantity: number) => void;
}
