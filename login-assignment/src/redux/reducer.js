const initialState = {
    list: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {  // ✅ Corrected this line
        case 'ADD':
            return {
                ...state,
                list: [...state.list, action.payload],  // ✅ Append new item instead of replacing
            };
        case 'REMOVE':
            return {
                ...state,
                list: state.list.filter(item => item !== action.payload),  // ✅ Remove the specific item
            };
        default:
            return state;
    }
};

export default reducer;
