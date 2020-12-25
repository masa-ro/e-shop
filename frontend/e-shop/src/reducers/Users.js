const initialState = {
    user:{
        name:"",
        birthday:"",
        gender:0,
        childmode:0,
    },
    users:[],
}

function usersReducer(state = initialState, action){
    switch(action.type){
        case 'FETCH_USERS':
            return{
                ...state,
                users: action.payload.users,
            };
        case 'INPUT_NAME':
            return{
                ...state,
                name: action.payload.name,
            };
        case 'INPUT_BIRTHDAY':
            return{
                ...state,
                birthday: action.payload.birthday,
            };
        case 'INPUT_CHILDMODE':
            return{
                ...state,
                childmode: action.payload.childmode,
            };
        default:
            return state;
    };
};

export default usersReducer;