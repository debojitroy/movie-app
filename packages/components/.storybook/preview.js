import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {withA11y} from '@storybook/addon-a11y';
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';
import lightTheme from '../theme/light';
import darkTheme from '../theme/dark';

export const getAllThemes = () => {
  return [lightTheme, darkTheme];
};

addDecorator(withThemesProvider(getAllThemes()));

addDecorator(withA11y);
addDecorator(withKnobs);

addDecorator(
  withTests({
    results,
  })
);

addParameters({
  options: {
    brandTitle: 'Awesome Movie App',
    brandUrl: 'https://github.com/debojitroy/movie-app',
    showRoots: true,
  },
});