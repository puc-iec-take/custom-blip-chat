const INITIAL_STATE = ""

function appKey(state = INITIAL_STATE, action) {

    switch (action.type) {
      case 'ADD_KEY': 
        state = action.key;
        return state
      default:
        return state;
    }
  }

  export default appKey