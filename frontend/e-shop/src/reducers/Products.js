const initialState = {
    product:'',
    products:[],
    categories:[],
    text:'',
    select:'',
};

function productsReducer(state = initialState, action){
    switch(action.type){
        case 'FETCH_PRODUCTS':
            return{
                ...state,
                products: action.payload.products,
            };
        case 'FETCH_CATEGORIES':
            return{
                ...state,
                categories: action.payload.categories,
            }
        case 'INPUT_TEXT':
            return{
                ...state,
                text: action.payload.text,

            };
        case 'INPUT_SELECT':
            return{
                ...state,
                select: action.payload.select,
            };
        default:
            return state;
    }
};

export default productsReducer;