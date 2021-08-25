import { useContext } from "react";
import cartContext from "../contexts/Cart";

const useCart = () => {
	return useContext(cartContext);
};

export default useCart;
