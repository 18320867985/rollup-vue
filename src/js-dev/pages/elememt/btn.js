import  Vue from 'vue';
import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
import App from './btn.vue';

Vue.use(ElementUI);

export const btn = {


	init() {
		
		 new Vue({
		   render: h => h(App),
		 }).$mount('#app')
		 
	  }

	}






