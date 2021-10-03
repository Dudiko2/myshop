import { FC, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SearchBar from "./SearchBar";
import InputSelect from "./InputSelect";
import { queryToString, useSearchQuery } from "../lib/search";
import styles from "../styles/AdvancedSearch.module.css";
import { useRouter } from "next/router";

const AdvancedSearch: FC = () => {
	const searchQuery = useSearchQuery();
	const [selectedSortKey, setSelectedSortKey] = useState(searchQuery.sortby);
	const router = useRouter();

	const sortOptions = [
		{
			text: "Title",
			value: "TITLE",
		},
		{ text: "Price", value: "PRICE" },
	];

	return (
		<Container>
			<Container>
				<Row>
					<Col>
						<form
							action="/products"
							className={styles.searchForm}
							autoComplete="off"
						>
							<SearchBar value={searchQuery.q} className={styles.bar} />
							<InputSelect
								id={"sortby"}
								label={"Sort By"}
								onInput={(e) => {
									setSelectedSortKey(e.target.value);
									const q = { ...searchQuery, sortby: e.target.value };
									const qs = queryToString(q);
									router.push(router.pathname + qs);
								}}
								name="sortby"
								options={sortOptions}
								selectedValue={selectedSortKey}
							/>
						</form>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

// const Form = ({ className }) => {
// 	return (
// 		<form action="/products" className={className} autoComplete="off"></form>
// 	);
// };

export default AdvancedSearch;
