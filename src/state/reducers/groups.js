import * as actionTypes from '../actionTypes';
const initialState = {
    groupList: [],
    filteredGroups: [],
    searchTerm: ''
}

const groups = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_GROUPS:
            return {
                ...state,
                groupList: action.payload
            };
        case actionTypes.SET_SEARCHED_GROUPS:
            return {
                ...state,
                filteredGroups: action.payload
            }

        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload
            }

        default:
            return state;
    }
}

export default groups;
