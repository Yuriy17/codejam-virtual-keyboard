 
module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
    "parser": "babel-eslint",
    "extends": "airbnb-base",
    "rules": {
        "max-len": [1, 110, 2, { "ignoreComments": true }],
        "camelcase": "warn",
        "linebreak-style": 0
      }
  }
