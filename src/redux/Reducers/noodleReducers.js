
const initState = {
    noodle: {
        noodle01: true,
        noodle02: true,
        noodle03: true,
    }

}
const noodleReducer = (state  = initState, action) =>{
    switch(action.type){
        case noodle01: 
            return{
                ...state,
                isLoading: true
            }
}
    return state;
}

export default noodleReducer;
