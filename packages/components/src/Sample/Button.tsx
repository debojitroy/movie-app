import React from 'react';
import { SampleButton } from './styled';

const Button: React.FC<{
	value: string;
	onClickHandler: () => void;
}> = ({ value, onClickHandler }) => (
	<SampleButton onClick={onClickHandler}>{value}</SampleButton>
);

export default Button;
