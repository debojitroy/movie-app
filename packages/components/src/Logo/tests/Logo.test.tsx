import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import lightTheme from '../../../theme/light';
import Logo from '../Logo';

describe('Button', () => {
	it('should mount and display logo with name', () => {
		const image = {
			src: 'logo.png',
			alt: 'Awesome movie app logo',
		};
		const brandName = 'Awesome Movie App';
		const linkAddress = '/';

		const logo = mount(
			<ThemeProvider theme={lightTheme}>
				<Logo
					imageSrc={image.src}
					imageAlt={image.alt}
					brandName={brandName}
					linkAddress={linkAddress}
				/>
			</ThemeProvider>
		);

		const props = logo.props().children.props;
		expect(props.imageSrc).toEqual(image.src);
		expect(props.imageAlt).toBe(image.alt);
		expect(props.brandName).toBe(brandName);
		expect(props.linkAddress).toBe(linkAddress);
	});
});
