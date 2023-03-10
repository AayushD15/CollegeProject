export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

import jwtService from 'app/services';

export function submitLogin({ email, password }) {
    return (dispatch) =>
        jwtService
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                return dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {
                        user: user
                    }
                });
            })
            .catch((error) => {
                console.log(error.response.data.message);
                alert(error.response.data.message);
                return dispatch({
                    type: LOGIN_ERROR,
                    payload: error
                });
            });
}
