'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('smoothscroll-polyfill').polyfill();


var Element = function Element(props) {
	return props.children;
};

var Scroll = function (_React$Component) {
	_inherits(Scroll, _React$Component);

	function Scroll() {
		_classCallCheck(this, Scroll);

		var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this));

		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(Scroll, [{
		key: 'handleClick',
		value: function handleClick(e) {
			e.preventDefault();
			var elem = 0;
			var scroll = true;
			var _props = this.props,
			    type = _props.type,
			    element = _props.element,
			    offset = _props.offset,
			    timeout = _props.timeout;

			if (type && element) {
				switch (type) {
					case 'class':
						elem = document.getElementsByClassName(element)[0];
						scroll = elem ? true : false;
						break;
					case 'id':
						elem = document.getElementById(element);
						scroll = elem ? true : false;
						break;
					default:
				}
			}
			scroll ? this.scrollTo(elem, offset, timeout) : console.log('Element not found: ' + element); // eslint-disable-line
		}
	}, {
		key: 'scrollTo',
		value: function scrollTo(element) {
			var offSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
			var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

			var elemPos = element ? element.getBoundingClientRect().top + window.pageYOffset : 0;
			if (timeout) {
				setTimeout(function () {
					window.scroll({ top: elemPos + offSet, left: 0, behavior: 'smooth' });
				}, timeout);
			} else {
				window.scroll({ top: elemPos + offSet, left: 0, behavior: 'smooth' });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				Element,
				null,
				_typeof(this.props.children) === 'object' ? _react2.default.cloneElement(this.props.children, { onClick: this.handleClick }) : _react2.default.createElement(
					'span',
					{ onClick: this.handleClick },
					this.props.children
				)
			);
		}
	}]);

	return Scroll;
}(_react2.default.Component);

Scroll.propTypes = {
	type: _propTypes2.default.string,
	element: _propTypes2.default.string,
	offset: _propTypes2.default.number,
	timeout: _propTypes2.default.number,
	children: _propTypes2.default.node.isRequired
};
exports.default = Scroll;