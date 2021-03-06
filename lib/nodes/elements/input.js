'use strict';
var util = require('util');

var Element = require('../element');

/**
 * @constructor
 * @private
 */
function InputElement() {
	Element.apply(this, arguments);
	if (!this.type) {
		this.type = 'text';
	}
}

util.inherits(InputElement, Element);

Object.defineProperty(InputElement.prototype, 'value', {
	get: function() {
		return this.attributes.getNamedItem('value');
	},
	set: function(value) {
		return this.attributes.setNamedItem('value', value);
	}
});

module.exports = InputElement;
