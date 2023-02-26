import axios from 'axios';
import * as Constants from 'app/constants';
export const REGISTER_STUDENT = '[EVENT APP] REGISTER';

export const GET_COLLEGE_LIST = '[EVENT APP] COLLEGE_LIST';

export function registerUser(data) {
    return (dispatch, getState) => {
        const request = axios.post(Constants.BASE_URL + 'api/register/', data);
        return request.then((request) =>
            Promise.all([
                dispatch({
                    type: REGISTER_STUDENT,
                    payload: data
                })
            ]).then(() => {
                dispatch();
            })
        );
    };
}

export function getCollegeListMaster() {
    let query = { type: 'collegename' };
    const request = axios.post(Constants.BASE_URL + 'api/Master/', query);
    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: GET_COLLEGE_LIST,
                payload: response.data
            })
        );
}
