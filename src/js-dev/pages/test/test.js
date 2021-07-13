import Vue from 'vue'
import Test from './test.vue'

export const test = {

	init() {
		
		 new Vue({
		   render: h => h(Test),
		 }).$mount('#app')
		 
	  }

	}







