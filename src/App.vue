<template>
    <div id="app">
        <Header />
        <!--여기서 html관련 다들어간다 3-->
        <div id="content" class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
//가져온 Header을 쓰려면 가져온 이 Header을 밑에 components에 넣어줘야한다. 1
export default {
    name: "App",
    components: {
        //여기에 넣고나면 2
        Header,
    },
};
</script>

<style></style>
