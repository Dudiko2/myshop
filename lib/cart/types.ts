export interface CartItem extends ShopifyBuy.ProductVariant {
	parentTitle: string;
	quantity: number;
}

export interface Cart {
	items: CartItem[];
	addToCart: (newItem: CartItem, quantity: number) => void;
	removeFromCart: (id: string | number, quantity: number) => void;
	clearCart: () => void;
	total: number;
	size: number;
}

//-------------useReducer Actions---------------------------
export interface AddToCartAction {
	type: "ADD_TO_CART";
	payload: { quantity: number; newItem: CartItem };
}

export interface RemoveFromCartAction {
	type: "REMOVE_FROM_CART";
	payload: { quantity: number; id: string | number };
}

export interface ClearCartAction {
	type: "CLEAR_CART";
	payload: {};
}

export type Action = AddToCartAction | RemoveFromCartAction | ClearCartAction;
