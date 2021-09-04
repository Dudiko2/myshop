import { FC } from "react";
import Box from "../wrappers/Box";
import Image from "next/image";
import { CartItem, useCart } from "../lib/cart/cart";
import styles from "../styles/CartTable.module.css";

const CartTable = () => {
	const cart = useCart();
	const listItems = cart.items.map((i) => {
		return (
			<li key={"table item:" + i.id}>
				<CartTableItem item={i} />
			</li>
		);
	});

	return (
		<Box className={styles.table}>
			<div className={styles.title}>
				<h6>Items</h6>
			</div>
			<div className={styles.body}>
				{listItems.length > 0 ? (
					<ul>{listItems}</ul>
				) : (
					<div className={styles.empty}>The cart is empty</div>
				)}
			</div>
		</Box>
	);
};

interface ItemProps {
	item: CartItem;
}

const CartTableItem: FC<ItemProps> = ({ item }) => {
	return (
		<div className={styles.item}>
			<div className={styles.itemImage}>
				<Image
					src={item.image.src}
					alt={"item.image.altText"}
					layout="responsive"
					height="560"
					width="635"
				/>
			</div>
			<div className={styles.itemTitle}>
				<div>{item.parentTitle}</div>
				<div>{item.title}</div>
			</div>
			<div>{item.price}</div>
			<div>{item.quantity}</div>
			<div>X</div>
		</div>
	);
};

export default CartTable;
