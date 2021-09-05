import { useContext } from "react";
import { cartContext } from "./context";
import type { Cart } from "./types";

export const useCart = (): Cart => {
	return useContext(cartContext);
};
