import React, { useState } from 'react';
import Switch from 'react-switch';
import { ToggleLeftText, ToggleRightText } from './styled';

export interface ToggleProps {
	idSelector: string;
	leftText: string;
	rightText: string;
	isChecked: boolean;
	offColor: string;
	onColor: string;
	offHandleColor: string;
	onHandleColor: string;
	onChange: (checked: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({
	idSelector,
	leftText,
	rightText,
	isChecked,
	offColor,
	onColor,
	offHandleColor,
	onHandleColor,
	onChange,
}) => {
	const [isToggleOn, setToggleOn] = useState(isChecked);

	const handleChange = (checked: boolean) => {
		setToggleOn(checked);
		onChange && onChange(checked);
	};

	return (
		<label htmlFor={idSelector}>
			<ToggleLeftText>{leftText}</ToggleLeftText>
			<Switch
				checked={isToggleOn}
				onChange={handleChange}
				offColor={offColor}
				offHandleColor={offHandleColor}
				onColor={onColor}
				onHandleColor={onHandleColor}
				handleDiameter={20}
				uncheckedIcon={false}
				checkedIcon={false}
				boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
				activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
				height={20}
				width={48}
				id={idSelector}
			/>
			<ToggleRightText>{rightText}</ToggleRightText>
		</label>
	);
};

export default Toggle;
