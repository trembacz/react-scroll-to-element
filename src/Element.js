import React from 'react';
import PropTypes from 'prop-types';

export default class Element extends React.Component {
	static propTypes = {
		children: PropTypes.node.isRequired
	}
	render() {
		return (
			this.props.children
		);
	}
}
