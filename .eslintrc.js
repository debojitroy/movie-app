module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react-hooks'],
	rules: {
		'react/prop-types': [0],
		'react/forbid-prop-types': [0],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	overrides: [
		{
			files: ['**/*.js', '**/*.jsx'],
			parser: 'babel-eslint',
			extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
			plugins: ['react-hooks'],
			rules: {
				'react-hooks/rules-of-hooks': 'error',
				'react-hooks/exhaustive-deps': 'warn',
			},
			settings: {
				react: {
					version: 'detect',
				},
			},
		},
	],
};
