const INITIAL_STATE = ""

function customStyle(state = INITIAL_STATE, action) {

    switch (action.type) {
      case 'ADD_STYLE': 
      console.log(action)
        state = action.style;
        return state
      default:
        return state;
    }
  }

  export default customStyle