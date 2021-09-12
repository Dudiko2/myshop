import { FC } from "react";
import styles from "../styles/SearchBar.module.css";

const SearchBar: FC = () => {
	return (
		<form action="/products" className={styles.form} autoComplete="off">
			<input
				id="searchBar"
				className={styles.SearchBar}
				type="text"
				name="querystring"
				placeholder="Search..."
			/>
		</form>
	);
};

export default SearchBar;
