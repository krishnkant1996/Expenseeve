import * as actionTypes from './actionTypes';
import axios from "axios";


export const setCategory = ( category ) => {
    return {
        type: actionTypes.SET_CATEGORY,
        category: category
    };
};

export const fetchCategoryFailed = () => {
    return {
        type: actionTypes.FETCH_CATEGORY_FAILED
    }
};

export const getCategory = () => {
    return dispatch => {
        axios.get('http://localhost:3000/all-categories')
        .then( response => {
            console.log(response)
            dispatch(setCategory(response.data));

        })
        .catch( error => {
            dispatch(fetchCategoryFailed());
        } );
    }
            
};
export const addCategory = (name) => {
    return dispatch => {
        axios.post(' http://localhost:3000/category',{name} )
        .then( response => {
           dispatch(getCategory());
        } )
        .catch( error => {
            dispatch(fetchCategoryFailed());
        } );
    }
};