import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {
	HeroTextContainer,
	HeroTitle,
	HeroSubText,
	HeroDescription,
} from './styled';

const Hero: React.FC<{
	idSelector: string;
	backgroundImage: string;
	movieName: string;
	movieRating: string;
	mobieDescription: string;
	onTitleClick: () => void;
}> = ({
	idSelector,
	backgroundImage,
	movieName,
	movieRating,
	mobieDescription,
	onTitleClick,
}) => {
	return (
		<Jumbotron
			id={`${idSelector}-hero`}
			fluid
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: 'cover',
			}}
		>
			<HeroTextContainer>
				<HeroTitle onClick={onTitleClick}>{movieName}</HeroTitle>
				<HeroSubText>{movieRating}</HeroSubText>
				<HeroDescription>{mobieDescription}</HeroDescription>
			</HeroTextContainer>
		</Jumbotron>
	);
};

export default Hero;
