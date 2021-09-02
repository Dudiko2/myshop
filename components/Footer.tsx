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
						<Row>{genFooterSections()}</Row>
					</Col>
				</Row>

				{/* copyright and legals */}
				<Row className={styles.bottom}>
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

// generate dummy data
const genFooterSections = () => {
	const sections = [
		{ title: "Shop", links: ["For Women", "For Men", "Blog"] },
		{ title: "Company", links: ["About", "Careers"] },
		{ title: "Your Account", links: ["Orders", "Wishlist"] },
	];

	const out = sections.map((s, index) => (
		<Col md={12} lg={4} key={s.title}>
			<div>
				<h5 className={styles.sectionHeading}>{s.title}</h5>
				<ul>
					{s.links.map((l, i) => (
						<li key={l + i}>
							<a className={styles.companyLink} href="/">
								{l}
							</a>
						</li>
					))}
				</ul>
			</div>
		</Col>
	));

	return out;
};

export default Footer;
