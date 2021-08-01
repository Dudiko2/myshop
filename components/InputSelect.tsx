import { FC } from "react";
import styles from "../styles/InputSelect.module.css";

interface SelectComponent extends FC {
	Option: FC<OptionProps>;
}

interface OptionProps {
	value: string;
	text: string;
}
const InputSelect: SelectComponent = ({ children }) => {
	return <select className={styles.inputSelect}>{children}</select>;
};

const Option: FC<OptionProps> = ({ value, text }) => {
	return <option value={value}>{text}</option>;
};

InputSelect.Option = Option;

export default InputSelect;
