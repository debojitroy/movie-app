import React from 'react';
import { NoResultsRow } from './styled';

const NoResultsFoundRow: React.FC<{ text: string }> = ({ text }) => (
	<NoResultsRow>{text}</NoResultsRow>
);

export default NoResultsFoundRow;
