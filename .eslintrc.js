 
module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
    "parser": "babel-eslint",
    "parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
    "extends": "airbnb-base",
    "rules": {
        "max-len": [1, 110, 2, { "ignoreComments": true }],
        "camelcase": "warn",
		"linebreak-style": 0,
		"no-underscore-dangle": "off"
      },
  }
