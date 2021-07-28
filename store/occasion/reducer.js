import { actionTypes } from './action';

export const initState = {
    occasionItems: [],
    occasionTotal: 0,
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.GET_OCCASION_LIST_SUCCESS:
            return {
                ...state,
            };
        case actionTypes.UPDATE_OCCASION_LIST_SUCCESS:
            return {
                ...state,
                ...{
                    occasionItems: action.payload.occasionItems,
                    occasionTotal: action.payload.occasionTotal,
                },
            };
        case actionTypes.GET_OCCASION_LIST_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        default:
            return state;
    }
}

export default reducer;
