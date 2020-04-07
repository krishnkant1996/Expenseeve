import * as actionTypes from './actionTypes';
import axios from "axios";


export const setExpenses = ( expenses ) => {
    return {
        type: actionTypes.SET_EXPENSES,
        expenses: expenses
    };
};

export const fetchExpensesFailed = () => {
    return {
        type: actionTypes.FETCH_EXPENSES_FAILED
    }
};

export const getExpenses = () => {
    return dispatch => {
        axios.get('http://localhost:3000/all-expenses')
        .then( response => {
            console.log(response)
            dispatch(setExpenses(response.data));

        })
        .catch( error => {
            dispatch(fetchExpensesFailed());
        } );
    }

            
};
export const addExpense = (data) => {
    return dispatch => {
        dispatch(setExpenses(data));
    }
};