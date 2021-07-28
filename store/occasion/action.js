export const actionTypes = {
    GET_OCCASION_LIST: 'GET_OCCASION_LIST',
    GET_OCCASION_LIST_SUCCESS: 'GET_OCCASIONT_LIST_SUCCESS',
    GET_OCCASION_LIST_ERROR: 'GET_OCCASION_LIST_ERROR',

    ADD_ITEM_OCCASION: 'ADD_ITEM_OCCASION',
    REMOVE_ITEM_OCCASION: 'REMOVE_ITEM_OCCASION',

    UPDATE_OCCASION_LIST: 'UPDATE_OCCASION_LIST',
    UPDATE_OCCASION_LIST_SUCCESS: 'UPDATE_OCCASION_LIST_SUCCESS',
    UPDATE_OCCASION_LIST_ERROR: 'UPDATE_OCCASION_LIST_ERROR',

    CLEAR_OCCASION_LIST: 'CLEAR_OCCASION_LIST',
};

export function getOcassionList() {
    return { type: actionTypes.GET_OCCASION_LIST };
}

export function getOccasionListSuccess(data) {
    return {
        type: actionTypes.GET_OCCASION_LIST_SUCCESS,
        data,
    };
}

export function addItemToOccasion(product) {
    return { type: actionTypes.ADD_ITEM_OCCASION, product };
}

export function removeOccasionItem(product) {
    return { type: actionTypes.REMOVE_ITEM_OCCASION, product };
}

export function clearOcassion() {
    return { type: actionTypes.CLEAR_CART };
}

export function updateOccasionListSuccess(payload) {
    return {
        type: actionTypes.UPDATE_OCCASION_LIST_SUCCESS,
        payload,
    };
}
