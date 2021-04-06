import * as actionTypes from '../actionTypes';

export const setGroups = (groups) => (dispatch) => {
    dispatch({type: actionTypes.SET_GROUPS, payload: groups})
}

export const setSearchedGroups = (searchedGroups) => (dispatch) => {
    dispatch({type: actionTypes.SET_SEARCHED_GROUPS, payload: searchedGroups});
}

export const setSearchTerm = (searchTerm) => (dispatch, getState) => {
    dispatch({type: actionTypes.SET_SEARCH_TERM, payload: searchTerm});
}
