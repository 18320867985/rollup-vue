import  Vue from 'vue';
import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
import App from './container.vue';

Vue.use(ElementUI);

export const container = {

	init() {
		
		 new Vue({
		   render: h => h(App),
		 }).$mount('#app')
		 
	  }

	}





