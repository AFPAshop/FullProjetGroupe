import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'signin', {
                username: user.username,
                password: user.password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    login(user) {
        axios
            .post(this.$store.state.url + "/user/login", {
                mail: user.mail,
                password: user.password,
            })
            .then((res) => {
                if (res.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(res.data));
                }
                return response.data;
            })
            .catch((err) => {
                err;
            });
    }

    signUp(user) {
        return axios
            .post(
                this.$store.state.url + "/user/create", {
                    lastName: user.lastName,
                    firstName: user.firstName,
                    mail: user.mail,
                    password: user.password,
                    phone: user.phone,
                }, {
                    header: {},
                }
            )
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                error;
            });
    }
}


export default new AuthService();