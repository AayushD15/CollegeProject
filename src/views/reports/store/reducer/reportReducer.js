import * as Actions from '../actions';
import * as Constants from 'app/constants';
const initatState = {
    reportTypes: [],
    entities: null,
    searchText: '',
    selectedGiftIds: [],
    routeParams: {},
    totalRecords: 0,
    reportData: {},
    pageSize: 10,
    pages: null,
    currentPage: 0,
    listQuery: Constants.listQuery,
    schemes: [],
    excelDownloadCompleted: 0
};
const reportReducer = function (state = initatState, action) {
    switch (action.type) {
        case Actions.EXCEL_EXPORT_DONE: {
            return {
                ...state,
                excelDownloadCompleted: state.excelDownloadCompleted + 1
            };
        }

        default:
            return state;
    }
};

export default reportReducer;
