import { FC, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import InputSelect from "./InputSelect";
import Price from "./Price";
import { useCart } from "../lib/cart/index";
import type { CartItem } from "../lib/cart/types";
import styles from "../styles/ProductPageMain.module.css";
import { ShopifyVariant } from "../services/shopify";

interface ProductPageMainProps {
    selectedVariant: ShopifyVariant;
    setVariant: (id: string | number) => void;
    title: string;
    description: string;
    variants?: ShopifyVariant[];
}

const ProductPageMain: FC<ProductPageMainProps> = ({
    selectedVariant,
    setVariant,
    title,
    description,
    variants,
}) => {
    const cart = useCart();
    const [amountToAdd, setAmountToAdd] = useState("1");
    const altText = selectedVariant.image.altText;
    const currencyCode = selectedVariant.priceV2?.currencyCode as string;
    const price = selectedVariant.price;
    const originalPrice = selectedVariant.compareAtPrice;
    const available = selectedVariant.available;
    const itemToAdd = {
        parentTitle: title,
        ...selectedVariant,
        quantity: 0,
    } as CartItem;

    return (
        <Container>
            <Row className={styles.mainRow}>
                <Col>
                    <div className={styles.box}>
                        <Image
                            layout="responsive"
                            src={selectedVariant.image.src}
                            alt={altText || "product variant"}
                            height="560"
                            width="635"
                        />
                    </div>
                </Col>
                <Col>
                    <Container
                        className={`${styles.productDetails} ${styles.box}`}
                    >
                        <h1>{title}</h1>
                        <Price
                            currencyCode={currencyCode}
                            currentPrice={price}
                            compareAtPrice={originalPrice}
                        />
                        <p className={styles.desc}>{description}</p>
                        <div className={styles.buttons}>
                            {variants && (
                                <InputSelect
                                    id="variants"
                                    label="Variants"
                                    onInput={(e) => setVariant(e.target.value)}
                                    options={variants.map((v) => ({
                                        text: v.title,
                                        value: `${v.id}`,
                                    }))}
                                    selectedValue={`${selectedVariant.id}`}
                                />
                            )}
                            <AddToCartButton
                                onClick={() =>
                                    cart.addToCart(
                                        itemToAdd,
                                        parseInt(amountToAdd)
                                    )
                                }
                                amount={amountToAdd}
                                onAmountChange={setAmountToAdd}
                                disabled={!available}
                            />
                            {!available && (
                                <div className={styles.unavailable}>
                                    Variant currently unavailable
                                </div>
                            )}
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

interface ButtonProps {
    onClick?: () => void;
    amount: string;
    onAmountChange: any;
    disabled: boolean;
}

const AddToCartButton: FC<ButtonProps> = ({
    onClick,
    amount,
    onAmountChange,
    disabled,
}) => {
    return (
        <div className={styles.atcGroup}>
            <Button
                disabled={disabled}
                onClick={onClick}
                className={styles.atc}
            >
                add to cart
            </Button>
            <input
                className={styles.amount}
                type="number"
                name="amount"
                min="1"
                max="100"
                step="1"
                value={amount}
                onInput={(e) =>
                    onAmountChange((e.target as HTMLInputElement).value)
                }
            />
        </div>
    );
};

export default ProductPageMain;
