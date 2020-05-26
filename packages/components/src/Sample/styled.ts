import styled from 'styled-components';

export const SampleButton = styled.button`
	background-color: ${(props) => props.theme.color.backgroundColor};
	color: ${(props) => props.theme.color.primary};
`;
