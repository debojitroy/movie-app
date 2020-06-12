import React from 'react';

const Loader: React.FC<{ loaderDescription: string }> = ({
	loaderDescription,
}) => {
	return (
		<div className="d-flex justify-content-center">
			<p id="loader-text">{loaderDescription}</p>
		</div>
	);
};

export default Loader;
