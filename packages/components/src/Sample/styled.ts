import styled from 'styled-components';

export const SampleButton = styled.button`
	background-color: ${(props) => props.theme.color.primaryColor};
	color: ${(props) => props.theme.color.primaryTextColor};
	font-family: ${(props: any) =>
		props.theme && props.theme.fontFamily
			? props.theme.fontFamily
			: "'Nunito Sans', sans-serif"};
	padding: 1rem;
	border: none;
	border-radius: 2px;
`;
