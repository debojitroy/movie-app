import React from 'react';
import { FooterContainer } from './styled';

const Footer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<FooterContainer>{children}</FooterContainer>
);

export default Footer;
