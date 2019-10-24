const INITIAL_STATE = 0;

function isChatBuild(state = INITIAL_STATE, action){
    switch(action.type){
        case 'BUILD':
            state = action.estado;
            return state
        default:
            return state
    }
}

  export default isChatBuild