import Vue from "vue";
import App from "./App.vue";
import router from "./router"; //router 임포트됫고
/*********** 뷰관련 3개의 친구들 ***** */
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"; //얘를 넣어야 부트스트랩 뷰가가능
import "bootstrap/dist/css/bootstrap.css"; //뷰 디자인
import "bootstrap-vue/dist/bootstrap-vue.css"; //뷰디자인
/*********** 라우터**************** */

Vue.config.productionTip = false;
/*****부트스트랩뷰 쓰겟다이거*** */
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
console.log("main.js에옴");
new Vue({
    //마운트할때 roter을 쓰겟다
    router, // 여기서 router 정의해야한다.
    render: (h) => h(App),
}).$mount("#app");
