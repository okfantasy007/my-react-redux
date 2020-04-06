/*
const reducerCollecton1 = {
	state11: (state = {a11: 1}, action) => {
		switch (action.type) {
			case "increment":
				return {
					a11: 2
				};
			case "decrement":
				return {
					a11: 0
				};
			default:
				return state;
		}
	},
	state12: (state = {a12: 1}, action) => {
		switch (action.type) {
			case "increment":
				return {
					a12: 2
				};
			case "decrement":
				return {
					a12: 0
				};
			default:
				return state;
		}
	}
};

const reducerCollecton2 = {
	state21: (state = {a21: 1}, action) => {
		switch (action.type) {
			case "increment":
				return {
					a21: 2
				};
			case "decrement":
				return {
					a21: 0
				};
			default:
				return state;
		}
	},
	state22: (state = {a22: 1}, action) => {
		switch (action.type) {
			case "increment":
				return {
					a22: 2
				};
			case "decrement":
				return {
					a22: 0
				};
			default:
				return state;
		}
	}
};

const reducers = {
	...reducerCollecton1,
	...reducerCollecton2
};
*/

function combineReducers(reducers) {
	return function (state = {}, action) {
		for (let key in reducers) {
			if (typeof reducers[key] === "function") {
				// 首先拿到当前state
				const previousState = state[key];
				// 执行reducer后，需要更新对应state
				state[key] = reducers[key](previousState, action);
			}
		}
		return state;
	}
}

export default combineReducers;