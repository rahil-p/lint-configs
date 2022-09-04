module.exports = {
	extends: [
		'eslint:recommended',
		'airbnb-base',
		'plugin:prettier/recommended',
		'plugin:security/recommended',
		'plugin:eslint-comments/recommended',
	],
	plugins: ['security', 'jsdoc'],
	rules: {
		'arrow-body-style': 0, // disabled for prettier
		'eslint-comments/no-unused-disable': 2,
		'implicit-arrow-linebreak': 0,
		'import/extensions': [1, 'ignorePackages', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],
		'import/newline-after-import': 0,
		'import/order': [
			1,
			{
				groups: [['builtin', 'external', 'internal'], ['parent', 'sibling', 'index', 'unknown'], 'type'],
				pathGroups: [{ pattern: '@rahil-p/**', group: 'external', position: 'after' }],
				pathGroupsExcludedImportTypes: ['type'],
				'newlines-between': 'always',
			},
		],
		indent: 0,
		'jsdoc/match-description': [
			1,
			{
				mainDescription: {
					match: '/\\.\n?$/s',
					message: 'Description must end with a period.',
				},
				tags: {
					param: {
						match: '/^(.*\\.)*$/s',
						message: 'Parameter description must end with a period.',
					},
					returns: {
						match: '/[^\\s]+\\.$/s',
						message: 'Return description must end with a period.',
					},
				},
			},
		],
		'jsdoc/newline-after-description': 1,
		'jsdoc/require-hyphen-before-param-description': 1,
		'lines-between-class-members': [1, 'always', { exceptAfterSingleLine: true }],
		'newline-per-chained-call': 0,
		'no-control-regex': 0,
		'no-multi-assign': 0,
		'no-param-reassign': [1, { props: true, ignorePropertyModificationsForRegex: ['^_*acc$'] }],
		'no-tabs': 0,
		'no-trailing-spaces': 1,
		'no-underscore-dangle': 0,
		'object-curly-newline': 0,
		'object-shorthand': [1, 'always'],
		'prefer-arrow-callback': 0, // disabled for prettier
		'prettier/prettier': [
			1,
			{ arrowParens: 'avoid', tabWidth: 4, printWidth: 120, singleQuote: true, trailingComma: 'all' },
		],
		'security/detect-object-injection': 0,
		'space-before-function-paren': [1, { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
		jsdoc: {
			tagNamePreference: {
				param: 'param',
				returns: 'returns',
			},
		},
	},
};
