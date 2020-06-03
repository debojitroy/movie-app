import React from 'react';
import Col from 'react-bootstrap/Col';
import { CreditRow, CreditImage, CreditLink, CreditText } from './styled';

export interface MovieCreditRowProps {
	imageUrl: string;
	imageAlt: string;
	creditLink: string;
	creditText: string;
	creditLinkAction: () => void;
}

const MovieCreditRow: React.FC<MovieCreditRowProps> = ({
	imageUrl,
	imageAlt,
	creditLink,
	creditText,
	creditLinkAction,
}) => {
	return (
		<CreditRow>
			<Col className="d-sm-none d-md-block" md={4} lg={2}>
				<CreditImage
					src={imageUrl}
					alt={imageAlt}
					loading="lazy"
					thumbnail
					onClick={creditLinkAction}
				/>
			</Col>
			<Col sm={6} md={4} lg={3}>
				<CreditLink variant="link" onClick={creditLinkAction}>
					{creditLink}
				</CreditLink>
			</Col>
			<Col sm={6} md={4} lg={3}>
				<CreditText>{creditText}</CreditText>
			</Col>
		</CreditRow>
	);
};

export default MovieCreditRow;
