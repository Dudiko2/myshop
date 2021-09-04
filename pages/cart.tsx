import { Col, Container, Row } from "react-bootstrap";
import Layout from "../wrappers/Layout";
import Section from "../wrappers/Section";
import CartSummary from "../components/CartSummary";
import CartTable from "../components/CartTable";

const Cart = () => {
	return (
		<Layout>
			<Section title="Cart">
				<Container>
					<Row>
						{/* table */}
						<Col lg={8}>
							<CartTable />
						</Col>
						{/* bill */}
						<Col>
							<CartSummary />
						</Col>
					</Row>
				</Container>
			</Section>
		</Layout>
	);
};

export default Cart;
