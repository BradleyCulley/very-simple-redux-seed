const initialState = { count:0 };

export const incrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    default:
      return state;
  }
};
