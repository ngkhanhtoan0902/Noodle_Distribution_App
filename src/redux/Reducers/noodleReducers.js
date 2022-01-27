const initState = {
    noodle: {
        noodle01: true,
        noodle02: true,
        noodle03: true,
    },
}

const noodleReducer = (state  = initState, action) =>{
    switch(action.type){

        case 'SET_ND_01': 
            return{
                ...state.noodle.noodle01,
                isLoading: true
                
            }
        case 'SET_ND_02': 
            return{
                ...state.noodle.noodle02,
                isLoading: true
            }
        case 'SET_ND_03': 
            return{
                ...state.noodle.noodle03,
                isLoading: true
            }

}
    return state;
}

export default noodleReducer;
