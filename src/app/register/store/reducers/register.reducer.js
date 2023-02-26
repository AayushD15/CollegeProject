import * as Actions from '../actions';
const initialState = {
    collegesLists: null,
    data: {
        id: 0,
        name: '',
        emailId: '',
        clas: '',
        collegeName: '',
        contactNumber: '',
        gender: '',
        eventName: '',
        eventDate: '',
        festType: ''
    }
};

const registerReducer = function (state = initialState, actions) {
    switch (actions.type) {
        case Actions.REGISTER_STUDENT: {
            {
                return {
                    ...state,
                    data: actions.payload
                };
            }
        }
        case Actions.GET_COLLEGE_LIST: {
            return {
                ...state,
                collegesLists: actions.payload.items
            };
        }
        default:
            return state;
    }
};

export default registerReducer;
