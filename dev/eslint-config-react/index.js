module.exports = {
	extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
	plugins: ['react'],
	rules: {
		'react/button-has-type': 1,
		'react/destructuring-assignment': 1,
		'react/function-component-definition': [
			1,
			{ namedComponents: 'function-declaration', unnamedComponents: 'arrow-function' },
		],
		'react/hook-use-state': 1,
		'react/jsx-boolean-value': 1,
		'react/jsx-fragments': 1,
		'react/jsx-no-constructed-context-values': 2,
		'react/jsx-no-script-url': 2,
		'react/jsx-no-useless-fragment': 1,
		'react/jsx-pascal-case': [1, { allowNamespace: true, allowLeadingUnderscore: true }],
		'react/jsx-sort-props': [1, { callbacksLast: true, reservedFirst: true, shorthandFirst: true }],
		'react/jsx-tag-spacing': [1, { beforeClosing: 'never' }],
		'react/no-access-state-in-setstate': 2,
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 0,
		'react/self-closing-comp': 1,
		'react/sort-prop-types': [1, { callbacksLast: true, requiredFirst: true }],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
