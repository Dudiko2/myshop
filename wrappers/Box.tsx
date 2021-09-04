import { FC } from "react";
import styles from "../styles/Box.module.css";

interface Props {
	className?: string;
}

const Box: FC<Props> = ({ children, className = "" }) => {
	return <div className={`${styles.box} ${className}`}>{children}</div>;
};

export default Box;
