import { FC } from "react";
import styles from "../styles/InputSelect.module.css";

interface SelectProps {
	onInput: (e: any) => void;
	id?: string;
	label?: string;
}

interface SelectComponent<P = {}> extends FC<P> {
	Option: FC<OptionProps>;
}

interface OptionProps {
	value: string | number;
	text: string;
}
const InputSelect: SelectComponent<SelectProps> = ({
	children,
	onInput,
	id,
	label,
}) => {
	return (
		<div className={styles.wrapper}>
			{id && label && (
				<label className={styles.label} htmlFor={id}>
					{label}
				</label>
			)}
			<select id={id} onInput={onInput} className={styles.inputSelect}>
				{children}
			</select>
		</div>
	);
};

const Option: FC<OptionProps> = ({ value, text }) => {
	return <option value={value}>{text}</option>;
};

InputSelect.Option = Option;

export default InputSelect;
