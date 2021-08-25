import { createContext } from "react";
import type { Cart } from "../types/cart";

const cartContext = createContext({} as Cart);
cartContext.displayName = "Cart";

export default cartContext;
