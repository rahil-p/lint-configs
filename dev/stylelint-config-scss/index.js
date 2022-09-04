module.exports = {
	extends: ['stylelint-config-recommended-scss', 'stylelint-prettier/recommended'],
	rules: {
		indentation: 'tab',
		'prettier/prettier': [true, { printWidth: 120, singleQuote: true }],
	},
};
