function createStore(reducer) {
	/*
	返回对象
	{
		getState 函数，获取最新state
		dispatch 函数，派发action
		subscribe 返回unsubscribe函数
	}

	reducer
	(state = {a11: 1}, action) => {
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
	}
 */
	let state = {};
	let listeners = [];

	const getState = () => {
		return JSON.parse(JSON.stringify(state));
	};

	const dispatch = (action) => {
		// 执行reducer
		state = reducer(state, action);
		// 有listeners，则调用所有listeners
		listeners.forEach((listener, index) => {
			if (listener) {
				listener();
			} else {
				// 如果listen 为 null，则删除该listener
				listeners.splice(index);
			}
		})
	};


	const subscribe = (listener) => {
		listeners.push(listener);
		return function () {
			const index = listeners.indexOf(listener);
			listeners[index] = null;
		}
	};

	// 初始化全局state
	dispatch({
		type: "INIT_OVERALL_STATES"
	});

	return {
		getState,
		dispatch,
		subscribe
	}
}

export default createStore;