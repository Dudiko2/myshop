import { FC } from "react";
import styles from "../styles/Price.module.css";

interface PriceProps {
    currencyCode: string;
    currentPrice: string | number;
    compareAtPrice?: string | number;
}

const Price: FC<PriceProps> = ({
    currencyCode,
    currentPrice,
    compareAtPrice,
}) => {
    return (
        <div className={styles.Price}>
            {currencyCode}
            <span> {currentPrice} </span>
            {compareAtPrice && <del>{compareAtPrice}</del>}
        </div>
    );
};

export default Price;
