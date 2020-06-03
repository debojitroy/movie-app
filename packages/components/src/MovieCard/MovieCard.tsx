import React from 'react';
import {
	StyledCard,
	StyledCardImage,
	StyledCardBody,
	StyledCardTitle,
	StyledCardText,
} from './styled';

const MovieCard: React.FC<{
	imageUrl: string;
	imageAlt: string;
	cardTitle: string;
	cardText: string;
	cardAction: () => void;
}> = ({ imageUrl, imageAlt, cardTitle, cardText, cardAction }) => {
	return (
		<StyledCard>
			<StyledCardImage
				variant="top"
				src={imageUrl}
				alt={imageAlt}
				onClick={cardAction}
			/>
			<StyledCardBody>
				<StyledCardTitle onClick={cardAction}>{cardTitle}</StyledCardTitle>
				<StyledCardText>{cardText}</StyledCardText>
			</StyledCardBody>
		</StyledCard>
	);
};

export default MovieCard;
