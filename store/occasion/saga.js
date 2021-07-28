import { all, put, takeEvery } from 'redux-saga/effects';
import { notification } from 'antd';
import {
    actionTypes,
    getOccasionListSuccess,
    updateOccasionListSuccess,
} from './action';

const modalSuccess = type => {
    notification[type]({
        message: 'Added to occasion!',
        description: 'This product has been added to occasion!',
    });
};

const modalWarning = type => {
    notification[type]({
        message: 'Removed from occasion',
        description: 'This product has been removed from occasion!',
    });
};

function* getOccasionListSaga() {
    try {
        const localOccasionList = JSON.parse(
            localStorage.getItem('persist:martfury')
        ).occasion;
        yield put(getOccasionListSuccess(localOccasionList));
    } catch (err) {
        console.log(err);
    }
}

function* addItemToOccasionSaga(payload) {
    try {
        const { product } = payload;
        let localOccasion = JSON.parse(
            JSON.parse(localStorage.getItem('persist:martfury')).occasion
        );

        let existItem = localOccasion.occasionItems.find(
            item => item.id === product.id
        );

        if (!existItem) {
            localOccasion.occasionItems.push(product);
            localOccasion.occasionTotal++;
            yield put(updateOccasionListSuccess(localOccasion));
            modalSuccess('success');
        }
    } catch (err) {
        console.log(err);
    }
}

function* removeItemOccasionSaga(payload) {
    try {
        const { product } = payload;
        let localOccasion = JSON.parse(
            JSON.parse(localStorage.getItem('persist:martfury')).occasion
        );
        let index = localOccasion.occasionItems.indexOf(product);
        localOccasion.occasionTotal = localOccasion.occasionTotal - 1;
        localOccasion.occasionItems.splice(index, 1);
        yield put(updateOccasionListSuccess(localOccasion));
        modalWarning('warning');
    } catch (err) {
        console.log(err);
    }
}

function* clearOccasionListSaga() {
    try {
        const emptyCart = {
            occasionItems: [],
            occasionTotal: 0,
        };
        yield put(updateOccasionListSuccess(emptyCart));
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_OCCASION_LIST, getOccasionListSaga)]);
    yield all([
        takeEvery(actionTypes.ADD_ITEM_OCCASION, addItemToOccasionSaga),
    ]);
    yield all([
        takeEvery(actionTypes.REMOVE_ITEM_OCCASION, removeItemOccasionSaga),
    ]);
}
