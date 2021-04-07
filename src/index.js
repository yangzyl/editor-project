
import Vue from 'vue';
import VueRouter from  'vue-router';
import VueI18n from 'vue-i18n';
import Vuex from 'vuex';
import Api from './plugins/api';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Api);
// Vue.use(VueI18n);

/**
 * router
 */
import routerOptions from './router';

const router = window.r = new VueRouter(routerOptions);

/**
 * i18n
 */
// import i18nMessageEnUs from '@/langs/en_US.yaml';
// import i18nMessageZhCn from '@/langs/zh_CN.yaml';

// const i18n = new VueI18n({
// 	locale: 'zh_CN',
// 	messages: {
// 		//TODO lazy loading
// 		en_US: i18nMessageEnUs,
// 		zh_CN: i18nMessageZhCn
// 	}
// });

/**
 * Vuex.Store
 */
import storeOptions from './store';

const store = new Vuex.Store(storeOptions);

/**
 * Application.vue
 */

import Application from './Application';

const app = new Vue({
	// i18n,
	router,
	store,
	render(h) {
		return h(Application);
	}
});

app.$mount('#app');
