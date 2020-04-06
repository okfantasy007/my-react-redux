import React from "react";
import propTypes from "prop-types";

/*const mapStateToProps = (state) => ({
	state11: state.state11,
	state12: state.state12
});

const mapDispatchToProps = (dispatch) => ({
	increment_state11: (params) => {
		dispatch({
			type: "increment_state11",
			payload: params
		});
	},
	increment_state12: (params) => {
		dispatch({
			type: "increment_state12",
			payload: params
		});
	}
});*/

function connect(mapStateToProps, mapDispatchToProps) {
	return function (Comp) {
		return class Proxy extends React.Component {

			static contextTypes = {
				store: propTypes.object
			};

			constructor(props, context) {
				super(props, context);
				this.state = this.getStateFromContext(context);
			}

			componentDidMount() {
				const store = this.context.store;
				const subscribe = store.subscribe(() => {
					const newState = this.getStateFromContext(this.context);
					this.setState({
						...this.state,
						...newState
					});
				});
				this.setState({
					subscribe
				});
			}

			componentWillUnmount() {
				if (this.subscribe) {
					this.subscribe();
				}
			}

			getStateFromContext = (context) => {
				const store = context.store;
				const state = store.getState();
				const dispatch = store.dispatch;
				const partialState = mapStateToProps(state);
				const partialDispatch = mapDispatchToProps(dispatch);
				return {
					...partialState,
					...partialDispatch
				}
			};

			render() {
				return <Comp {...this.state} {...this.props}/>;
			}
		}
	}
}

export default connect;