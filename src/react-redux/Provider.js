import React from "react";
import propTypes from "prop-types";

class Provider extends React.Component {

	static childContextTypes = {
		store: propTypes.object
	};

	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	getChildContext = () => {
		return {
			store: this.props.store
		}
	};

	render() {
		return this.props.children;
	}


}

export default Provider;