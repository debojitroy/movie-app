import React from 'react';
import Media from 'react-bootstrap/Media';
import { ResultHeading, ResultText } from './styled';
export interface SearchResultRowProps {
	idSelector: string;
	imageUrl: string;
	imageAlt: string;
	resultTitle: string;
	resultSubtitle: string;
	resultBody: string;
}

const SearchResultRow: React.FC<SearchResultRowProps> = ({
	idSelector,
	imageUrl,
	imageAlt,
	resultTitle,
	resultSubtitle,
	resultBody,
}) => {
	const idPrefix = `search-row-${idSelector}`;

	return (
		<Media>
			<img
				id={`${idPrefix}-image`}
				width={48}
				height={72}
				className="align-self-start mr-3"
				src={imageUrl}
				alt={imageAlt}
				loading="lazy"
			/>
			<Media.Body>
				<ResultHeading id={`${idPrefix}-heading`}>{resultTitle}</ResultHeading>
				<ResultText id={`${idPrefix}-subtitle`}>{resultSubtitle}</ResultText>
				<ResultText id={`${idPrefix}-text`}>{resultBody}</ResultText>
			</Media.Body>
		</Media>
	);
};

export default SearchResultRow;
