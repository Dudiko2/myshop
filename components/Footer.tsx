import { FC } from "react";
import {
	Button,
	Col,
	Container,
	Form,
	FormControl,
	Row,
} from "react-bootstrap";
import Link from "next/link";
import InputContainer from "../wrappers/InputContainer";
import styles from "../styles/Footer.module.css";

const Footer: FC = () => {
	return (
		<Container fluid as="footer" className={styles.Footer}>
			<Container>
				<Row className={styles.company}>
					{/* email input */}
					<Col lg={12} xl={4}>
						<div>
							<h5 className={styles.sectionHeading}>Get in touch</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Impedit, nihil?
							</p>
							<Form inline>
								<InputContainer className={styles.mailContainer}>
									<FormControl type="email" placeholder="example@mail.com" />
									<Button>M</Button>
								</InputContainer>
							</Form>
						</div>
					</Col>

					{/* company links */}
					<Col lg={12} xl={8}>
						<Row>
							<Col md={12} lg={4}>
								<div>
									<h5 className={styles.sectionHeading}>Shop</h5>
									<ul>
										<li>brr</li>
										<li>trr</li>
										<li>trr</li>
										<li>brr</li>
									</ul>
								</div>
							</Col>
							<Col md={12} lg={4}>
								<div>
									<h5 className={styles.sectionHeading}>Shop</h5>
									<ul>
										<li>brr</li>
										<li>trr</li>
										<li>trr</li>
										<li>brr</li>
									</ul>
								</div>
							</Col>
							<Col>
								<div>
									<h5 className={styles.sectionHeading}>Shop</h5>
									<ul>
										<li>brr</li>
										<li>trr</li>
										<li>trr</li>
										<li>brr</li>
									</ul>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>

				{/* copyright and legals */}
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
