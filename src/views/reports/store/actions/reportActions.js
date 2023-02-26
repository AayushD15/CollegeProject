export const EXCEL_EXPORT_DONE = 'EXCEL_EXPORT_DONE';
import axios from 'axios';

import * as Constants from 'app/constants';

export function exportToExcel(params) {
    debugger;
    const request = axios.post(Constants.BASE_URL + 'api/Report/exportReportToCSV', params, { 'content-type': 'application/json' });
    console.log(request);
    request
        .then((response) => {
            console.log(response);
            if (response) {
                // dispatch(rootActions.showMessage({ message: response.data.message, variant: 'success' }))
                console.log(response.data.fileName);
                var url = Constants.BASE_URL + 'api/File/' + response.data.fileName;
                window.open(url, '_blank');
            }
            // dispatch({
            //     type: EXCEL_EXPORT_DONE
            // });
        })
        .catch((e) => {
            console.log(e);
        });
}
