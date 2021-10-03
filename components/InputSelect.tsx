import { FC } from "react";
import styles from "../styles/InputSelect.module.css";

interface SelectProps {
	onInput: (e: any) => void;
	id?: string;
	label?: string;
	name?: string;
	options: Array<{ text: string; value: string }>;
	selectedValue?: string;
}

interface SelectComponent<P = Record<string, unknown>> extends FC<P> {
	Option: FC<OptionProps>;
}

const InputSelect: SelectComponent<SelectProps> = ({
	onInput,
	id,
	label,
	name,
	options,
	selectedValue = "",
}) => {
	return (
		<div className={styles.wrapper}>
			{id && label && (
				<label className={styles.label} htmlFor={id}>
					{label}
				</label>
			)}
			<select
				id={id}
				onInput={onInput}
				className={styles.inputSelect}
				name={name}
				value={selectedValue}
			>
				{options.map((o, i) => (
					<Option key={`#${i}${o.value}`} value={o.value} text={o.text} />
				))}
			</select>
		</div>
	);
};

interface OptionProps {
	value: string | number;
	text: string;
}

const Option: FC<OptionProps> = ({ value, text }) => {
	return <option value={value}>{text}</option>;
};

InputSelect.Option = Option;

export default InputSelect;
