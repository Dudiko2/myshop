import { FC } from "react";
import styles from "../styles/InputContainer.module.css";

interface Props {
	className?: string;
}

const InputContainer: FC<Props> = ({ children, className = "" }) => {
	return <div className={`${styles.Container} ${className}`}>{children}</div>;
};

export default InputContainer;
