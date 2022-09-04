module.exports = {
	extends: ['stylelint-config-recess-order'],
	rules: {
		'block-opening-brace-space-before': null,
		'block-no-empty': null,
		'color-hex-length': 'long',
		'declaration-block-trailing-semicolon': 'always',
		'max-nesting-depth': 2,
		'rule-empty-line-before': [
			'always',
			{
				ignore: ['after-comment', 'first-nested'],
			},
		],
		'selector-combinator-space-after': 'always',
		'selector-combinator-space-before': 'always',
		'selector-list-comma-newline-after': 'always-multi-line',
		'string-quotes': 'single',
	},
};
