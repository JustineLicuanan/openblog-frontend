const PostReducer = (state, action) => {
	switch (action.type) {
		case 'CREATE_POST':
			return [...state, action.post];
		case 'UPDATE_POST':
			return state.map((post, index) => {
				if (index === action.index)
					Object.keys(action.updates).forEach((key) => {
						post[key] = action.updates[key];
					});
				return post;
			});
		case 'DELETE_POST':
			return state.filter((post) => post.id !== action.id);
		default:
			return state;
	}
};

export default PostReducer;
