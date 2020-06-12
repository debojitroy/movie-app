import React from 'react';
import { StyledNav, StyledBrand } from './styled';

const Logo: React.FC<{
	imageSrc: string;
	imageAlt: string;
	linkAddress: string;
	brandName: string;
}> = ({ imageSrc, imageAlt, linkAddress, brandName }) => {
	return (
		<StyledNav>
			<StyledBrand href={linkAddress}>
				<img
					alt={imageAlt}
					src={imageSrc}
					width="30"
					height="30"
					className="d-inline-block align-top"
				/>{' '}
				{brandName}
			</StyledBrand>
		</StyledNav>
	);
};

export default Logo;
