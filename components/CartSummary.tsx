import Box from "../wrappers/Box";
import styles from "../styles/CartSummary.module.css";

const CartSummary = () => {
	return (
		<Box className={styles.summary}>
			<div className={styles.summaryTitle}>
				<h6>Summary</h6>
			</div>
			<div className={styles.summaryBody}>
				<div className={styles.bodyPair}>
					<span className={styles.key}>Subtotal</span>
					<span className={styles.value}>6.23</span>
				</div>
				<div className={styles.bodyPair}>
					<span className={styles.key}>Shipping</span>
					<span className={styles.value}>2.00</span>
				</div>
				<div className={styles.bodyPair}>
					<span className={styles.key}>Discount</span>
					<span className={styles.value}>-3.00</span>
				</div>
				<div className={`${styles.bodyPair} ${styles.total}`}>
					<span className={styles.key}>Total</span>
					<span className={styles.value}>5.23</span>
				</div>
			</div>
		</Box>
	);
};

export default CartSummary;
