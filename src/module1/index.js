import React from "react";
import {connect} from "../react-redux";

class Comp extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {};
	}


	render() {
		console.log(this.props);
		return (
			<div>
				<h1>module1</h1>
				<h2>{this.props.state11.a11}</h2>
				<button onClick={() => this.props.increment_state11(1)}>点击+1</button>
				<button onClick={() => this.props.decrement_state11(1)}>点击-1</button>

			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	state11: state.state11
});
const mapDispatchToProps = (dispatch) => ({
	increment_state11: (params) => {
		dispatch({
			type: "increment_state11",
			payload: params
		})
	},
	decrement_state11: (params) => {
		dispatch({
			type: "decrement_state11",
			payload: params
		})
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(Comp);