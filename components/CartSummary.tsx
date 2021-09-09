import { FC } from "react";
import { Button } from "react-bootstrap";
import Box from "../wrappers/Box";
import { useCart } from "../lib/cart";
import styles from "../styles/CartSummary.module.css";

const CartSummary: FC = () => {
	const cart = useCart();

	return (
		<Box className={styles.summary}>
			<div className={styles.summaryTitle}>
				<h6>Summary</h6>
			</div>
			<div className={styles.summaryBody}>
				<div className={styles.bodyPair}>
					<span className={styles.key}>Subtotal</span>
					<span className={styles.value}>{cart.total}</span>
				</div>
				<div className={styles.bodyPair}>
					<span className={styles.key}>Shipping</span>
					<span className={styles.value}>0</span>
				</div>
				<div className={styles.bodyPair}>
					<span className={styles.key}>Discount</span>
					<span className={styles.value}>0</span>
				</div>
				<div className={`${styles.bodyPair} ${styles.total}`}>
					<span className={styles.key}>Total</span>
					<span className={styles.value}>{cart.total}</span>
				</div>
			</div>
			<div className={styles.btnWrap}>
				<Button id={styles.btn}>Continue</Button>
			</div>
		</Box>
	);
};

export default CartSummary;
