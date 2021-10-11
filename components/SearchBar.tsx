import { FC, useState } from "react";
import styles from "../styles/SearchBar.module.css";
import { usePredictiveSearch } from "../lib/search/hooks";

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
    const [suggestions, predict] = usePredictiveSearch();

    return (
        <div className={`${styles.wrapper} ${wrapperClassName}`}>
            <input
                id="searchBar"
                className={`${styles.SearchBar} ${inputClassName}`}
                type="text"
                name="q"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value);
                    if (predictive) predict(e.target.value);
                }}
            />
            {predictive && suggestions.length !== 0 && (
                <div className={styles.suggestions}>
                    {suggestions.slice(0, 5).map((s) => (
                        <div key={s.id}>{s.title}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
