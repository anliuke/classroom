import Vue from 'vue';
import router from './router/index';
import App from './App.vue';
import Mint from 'mint-ui'; 
import './assets/css/mixIn.css';

import './assets/css/commonTitle/common-title.stylus';
import './assets/css/index/indexIphoneX.stylus';
import './assets/css/index/indexPu.stylus';

import { T } from './utils/util';
import { M } from './utils/moblieCheck';
import 'swiper/dist/css/swiper.css';
import 'mint-ui/lib/style.css';
import iconfont from '@/assets/font/iconfont.css';
import md5 from 'js-md5';
import animated from 'animate.css'


//debug
import Vconsole from 'vconsole'
// if(process.env.NODE_ENV !== 'production'){
//     var VConsole = new Vconsole()
// }
Vue.use(Mint);
Vue.use(iconfont)
Vue.use(animated)
// 自定义全局方法
const t = new T();
// 自定义全局方法 -- 检测手机型号, 调用app事件
const m = new M();

Vue.prototype.$md5 = md5;
Vue.config.productionTip = true;
// 注册全局方法
Vue.prototype.$t = t;
Vue.prototype.$m = m;
// 页面适配
t.getRem(750, 100);
window.onresize = function () {
  t.getRem(750, 100)
}

new Vue({
  el: '#app',
  render(h) {
    return h(App);
  },
  router
})