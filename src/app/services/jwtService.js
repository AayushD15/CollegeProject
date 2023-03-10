import axios from 'axios';
import * as Constants from 'app/constants';

class jwtService {
    setSession = (jwt_token) => {
        if (jwt_token) {
            localStorage.setItem('jwt_access_token', jwt_token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwt_token;
        } else {
            localStorage.removeItem('jwt_access_token');
            delete axios.defaults.headers.common['Authorization'];
        }
    };

    logout = () => {
        this.setSession(null);
        location.replace('/app/dashboard/default');
    };

    signInWithEmailAndPassword = (email, password) => {
        return new Promise((resolve, reject) => {
            axios
                .post(Constants.BASE_URL + 'api/auth/authenticate', {
                    userName: email,
                    password
                })
                .then((response) => {
                    const logonPkg = response.data;
                    const logonUser = logonPkg.user;
                    if (logonUser) {
                        this.setSession(logonPkg.token);
                        location.reload();
                        location.replace('/app/dashboard/default');

                        resolve(logonUser);
                    } else {
                        reject(response.data.error);
                    }
                })
                .catch((error) => {
                    // console.log(error);
                    reject(error);
                });
        });
    };
}
const instance = new jwtService();

export default instance;
