 
module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
    "parser": "babel-eslint",
    "extends": "airbnb-base",
    "rules": {
        "max-len": [1, 70, 2, { "ignoreComments": true }],
        "camelcase": "warn"
      }
  }
