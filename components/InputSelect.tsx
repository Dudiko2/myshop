import { FC, FormEventHandler } from "react";
import styles from "../styles/InputSelect.module.css";

interface SelectProps {
	onInput: (e: any) => void;
}

interface SelectComponent<P = {}> extends FC<P> {
	Option: FC<OptionProps>;
}

interface OptionProps {
	value: string | number;
	text: string;
}
const InputSelect: SelectComponent<SelectProps> = ({ children, onInput }) => {
	return (
		<select onInput={onInput} className={styles.inputSelect}>
			{children}
		</select>
	);
};

const Option: FC<OptionProps> = ({ value, text }) => {
	return <option value={value}>{text}</option>;
};

InputSelect.Option = Option;

export default InputSelect;
