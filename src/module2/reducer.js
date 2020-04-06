const reducerCollecton2 = {
	state21: (state = {a21: 1}, action) => {
		switch (action.type) {
			case "increment_state21":
				return {
					a11: 2
				};
			case "decrement_state21":
				return {
					a11: 0
				};
			default:
				return state;
		}
	},
	state22: (state = {a22: 1}, action) => {
		switch (action.type) {
			case "increment_state22":
				return {
					a12: 2
				};
			case "decrement_state22":
				return {
					a12: 0
				};
			default:
				return state;
		}
	}
};

export default reducerCollecton2;