/** @type {import("eslint").ESLint.ConfigData} */
export default {
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	env: {
		browser: true,
		node: true
	},
	rules: {
		// 원하는 룰을 여기에 추가
	}
};
