import Home from './pages/Home';
import Dic from './pages/Dic';
import Detail from './pages/Detail';


export default {
	routes: [
		{
			path: '/',
			redirect: '/home',
			
		},
		{
			path: '/home',
			component: Home,
			name: 'home',
			meta: {
				unauthenticated: true
			}
		},
		{
			path: '/dic',
			name: 'dic',
			component: Dic,
			meta: {
				unauthenticated: true
			}
		},
		{
			path: '/:id/detail',
			component: Detail,
			name: 'detail',
			meta: {
				unauthenticated: true
			}
		},
		{
			path: '*',
			component: Home,
			redirect: {name: 'home'},
			meta: {
				unauthenticated: true
			}
		},
	]
};