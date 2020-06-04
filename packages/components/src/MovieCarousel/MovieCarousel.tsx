import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from 'react-player';

const MovieCarousel: React.FC<{
	isVideo: boolean;
	urls: string[];
}> = ({ isVideo, urls }) => {
	return (
		<Carousel>
			{urls.map((url) => (
				<Carousel.Item key={url}>
					{isVideo && <ReactPlayer url={url} />}
					{!isVideo && (
						<img className="d-block w-100" loading="lazy" src={url} />
					)}
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default MovieCarousel;
