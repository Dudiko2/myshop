import { FC, useState } from "react";
import styles from "../styles/SearchBar.module.css";

interface Props {
	className?: string;
	value?: string;
}

const SearchBar: FC<Props> = ({ className, value = "" }) => {
	const [searchValue, setSearchValue] = useState(value);

	return (
		<input
			id="searchBar"
			className={`${styles.SearchBar} ${className}`}
			type="text"
			name="q"
			placeholder="Search..."
			value={searchValue}
			onChange={(e) => setSearchValue(e.target.value)}
		/>
	);
};

export default SearchBar;
