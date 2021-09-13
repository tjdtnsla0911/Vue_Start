//라우터파일

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

//Vue내에서 VueRouter를 사용하겟다는거다

Vue.use(VueRouter);

let router = new VueRouter({
    mode: "history",
    routes: [
        //들어왔을때 어떻게 처리할꺼냐
        { path: "/", component: Home },
        { path: "/about", component: About },
    ],
});

export default router; //얘를 넣어야함
