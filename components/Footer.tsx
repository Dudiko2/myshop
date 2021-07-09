import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer: FC = () => {
	return (
		<Container fluid as="footer" className={styles.Footer}>
			<Container>
				<Row className={styles.company}>
					<Col lg={12} xl={4}>
						<h6>Get in touch</h6>
					</Col>
					<Col>
						<Row>
							<Col>
								<h6>Shop</h6>
								<ul>
									<li>brr</li>
									<li>trr</li>
									<li>trr</li>
									<li>brr</li>
								</ul>
							</Col>
							<Col>
								<h6>Company</h6>
								<ul>
									<li>brr</li>
									<li>trr</li>
									<li>trr</li>
									<li>brr</li>
								</ul>
							</Col>
							<Col>
								<h6>Your account</h6>
								<ul>
									<li>brr</li>
									<li>trr</li>
									<li>trr</li>
									<li>brr</li>
								</ul>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col md={12} lg={6} className={styles.copy}>
						<p>&copy; 2021 MYSHOP</p>
					</Col>
					<Col md={12} lg={6}>
						<ul className={`${styles.legalLinks} capitalize`}>
							<li>
								<Link href="/">terms & conditions</Link>
							</li>
							<li>
								<Link href="/">privacy policy</Link>
							</li>
							<li>
								<Link href="/">accessibility</Link>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default Footer;
