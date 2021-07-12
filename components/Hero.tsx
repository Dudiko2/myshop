import { FC } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/Hero.module.css";

const Hero: FC = () => {
	return (
		<Container fluid className={styles.Hero}>
			<Container>
				<Row>
					<Col lg={8}>
						<div className={styles.content}>
							<span className={`uppercase`}>subtitle</span>
							<h1 className={`capitalize ${styles.heading}`}>
								for every occassion
							</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
								nemo aut repudiandae!
							</p>
							<Link href="/" passHref>
								<Button className={`uppercase ${styles.button}`}>
									shop now
								</Button>
							</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default Hero;
