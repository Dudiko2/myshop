import { FC } from "react";
import { Button, Container } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Hero.module.css";

const Hero: FC = () => {
	return (
		<Container fluid className={styles.Hero}>
			<Container className={styles.innerHero}>
				<div className={styles.content}>
					<h1 className={`capitalize ${styles.heading}`}>for every occasion</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<Link href="/products" passHref>
						<Button id={styles.heroButton} className={`uppercase`}>
							shop now
						</Button>
					</Link>
				</div>
				<div className={styles.image}>
					<Image
						alt="shoes"
						src="/images/hero-shoes.webp"
						layout="responsive"
						height={600}
						width={1000}
					/>
				</div>
			</Container>
		</Container>
	);
};

export default Hero;
