const reducerCollecton1 = {
	state11: (state = {a11: 1}, action) => {
		switch (action.type) {
			case "increment_state11":
				return {
					a11: state.a11 + action.payload
				};
			case "decrement_state11":
				return {
					a11: state.a11 - action.payload
				};
			default:
				return state;
		}
	},
	state12: (state = {a12: 1}, action) => {
		switch (action.type) {
			case "increment_state12":
				return {
					a12: 2
				};
			case "decrement_state12":
				return {
					a12: 0
				};
			default:
				return state;
		}
	}
};

export default reducerCollecton1;