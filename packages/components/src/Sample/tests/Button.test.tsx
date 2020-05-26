import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import lightTheme from '../../../theme/light';
import Button from '../Button';

const clickFn = jest.fn();
describe('Button', () => {
	it('should simulate click', () => {
		const component = mount(
			<ThemeProvider theme={lightTheme}>
				<Button onClickHandler={clickFn} value="Hello" />
			</ThemeProvider>
		);
		component.find(Button).simulate('click');
		expect(clickFn).toHaveBeenCalled();
	});
});
