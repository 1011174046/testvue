// 1.0 导入Vue核心包
import Vue from 'vue';

// 2.0 导入App.vue的Vue对象
import App from './App.vue';

// 3.0 将vue-router集成到这个项目来
import vueRouter from 'vue-router'; 
// 3.0.1 将vueRouter对象绑定到Vue对象上
  Vue.use(vueRouter);

//  0 0 0.1  加载组件muse-ui
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.min.css';
Vue.use(MintUI);

// 5.0 注册mui的css样式
import '../statics/mui/css/mui.css';

// 6.0 导入一个当前系统的全局基本样式
import '../statics/css/site.css';

// 7.0 将vue-resource在vue中绑定
import vueResource from 'vue-resource';
Vue.use(vueResource);

// 3.0.2 导入路由规则对应的组件对象
import home from './components/home.vue';
import shopcar from './components/shopcar/car.vue';

import newslist from './components/news/newslist.vue';
import newsinfo from './components/news/newsinfo.vue';

import goodslist from './components/goods/goodslist.vue';
import photolist from './components/photo/photolist.vue';


// 导入时间对象
import {Toast} from 'mint-ui';

import moment from 'moment';
// ajax请求组件
// import Axios from 'axios';
// import axios from 'axios';
// Vue.prototype.$http = axios;
// 3.0.3 定义路由规则
var router = new vueRouter({
	linkActiveClass:'mui-active', //改变激活路由的class名称
	routes:[
		{path:'/',component:home},
		{path:'/home',component:home},
		{path:'/shopcar',component:shopcar},
		{path:'/news/newslist',component:newslist},
		{path:'/news/newsinfo/:id',component:newsinfo},
		
		{path:'/goods/goodslist',component:goodslist},
		{path:'/photo/photolist',component:photolist},
	],
});

// 定义一个全局的时间过滤器
Vue.filter('datefmt',function(input,fmtstring){
	// fmtstring = fmtstring?fmtstring:'YYY-MM-DD';
	return moment(input).format(fmtstring);
});

// 4.0 利用Vue对象进行解析渲染
new Vue({
	el:"#app",
	router,
	// render:function(create){create(App)} 
	render:c=>c(App),
	methods:function(){
	}   
});

