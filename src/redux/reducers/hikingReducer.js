const hikingReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_HIKING':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default hikingReducer;