import { FC, useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePredictiveSearch } from "../lib/search/hooks";
import { ShopifyProduct } from "../services/shopify";
import styles from "../styles/SearchBar.module.css";
import { shortenText } from "../lib/utils";

interface Props {
    inputClassName?: string;
    wrapperClassName?: string;
    value?: string;
    predictive?: boolean;
}

const SearchBar: FC<Props> = ({
    inputClassName = "",
    wrapperClassName = "",
    value = "",
    predictive = false,
}) => {
    const [searchValue, setSearchValue] = useState(value);
    const { suggestions, predict } = usePredictiveSearch();

    const handleChange = useCallback(
        (e) => {
            setSearchValue(e.target.value);
            if (predictive) predict(e.target.value);
        },
        [predict, predictive]
    );

    return (
        <div className={`${styles.wrapper} ${wrapperClassName}`}>
            <input
                id="searchBar"
                className={`${styles.SearchBar} ${inputClassName} test`}
                type="text"
                name="q"
                placeholder="Search..."
                value={searchValue}
                onChange={handleChange}
            />
            <Suggestions suggestions={suggestions} />
        </div>
    );
};

interface SuggestionsProps {
    suggestions: ShopifyProduct[];
}

const Suggestions: FC<SuggestionsProps> = ({ suggestions }) => {
    // Add interactivity: selection with arrows

    if (!suggestions.length) return null;

    return (
        <ul className={styles.suggestions}>
            {suggestions.slice(0, 5).map((s) => (
                <li key={s.id}>
                    <Link href={`/products/${s.handle}`} passHref>
                        <a>
                            <div className={styles.suggestionImage}>
                                <Image
                                    layout="fill"
                                    src={s.images[0].src}
                                    alt={s.title}
                                />
                            </div>
                            <div className={styles.suggestionTitle}>
                                {shortenText(s.title, 20)}
                            </div>
                            <div className={styles.suggestionPrice}>
                                {s.variants[0].price}
                            </div>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SearchBar;
