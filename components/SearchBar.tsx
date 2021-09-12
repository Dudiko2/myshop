import { FC, useState } from "react";
import styles from "../styles/SearchBar.module.css";

export const searchKeys = {
	QUERY: "q",
	SORT_KEY: "sortby",
};

const SearchBar: FC = () => {
	return (
		<form action="/products" className={styles.form} autoComplete="off">
			<input
				id="searchBar"
				className={styles.SearchBar}
				type="text"
				name={searchKeys.QUERY}
				placeholder="Search..."
			/>
		</form>
	);
};

export default SearchBar;
