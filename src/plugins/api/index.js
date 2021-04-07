
import axios from 'axios';


export default function install(Vue) {
	const agent = axios.create({
		baseURL: '/api/v3',
		transformRequest: [
			function (data, headers) {
				headers['Content-Type'] = 'application/json';
				return JSON.stringify(data);
			}
		]
	});

	Vue.$api = Vue.prototype.$api = {
		login(credential) {
			return agent.post('/login', {
				username: credential.username,
				password: credential.password
			}).then(res => {
				const { localStorage } = window;
				const principal = res.data.payload;

				localStorage.setItem(TOKEN_KEY_STORED, res.data.header.token);
				localStorage.setItem(USER_KEY_STORED, JSON.stringify(principal));

				return principal;
			}, error => {
				throw new Error(error.response.data.header.msg);
				//TODO 5
			});
		},
		logout() {
			window.localStorage.removeItem(TOKEN_KEY_STORED);
			window.localStorage.removeItem(USER_KEY_STORED);
		},
	};
}