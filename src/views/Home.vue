<template>
    <div>
        <h1>Welcome to {{ title2 }}!</h1>
        <!--vue에선 value에 해당하는걸 v-model로 한다 이걸로 바인딩한다-->
        <input type="text" name="test" v-model="input1" />
        <button type="button" @click="getData">안녕버튼</button>
        <button type="button" @click="setData">셋버튼</button>
    </div>
</template>
<script>
export default {
    //투바인딩
    //vue는 getElement이딴거 안쓰고 바로 가능하다.
    data() {
        return {
            title: "개발자의 품격",
            title2: "Seoul",
            input1: "abc",
        };
    },

    methods: {
        //function임
        getData() {
            //this쓰면 data()안에있는거에서 가져옴
            alert(this.input1);
        },
        setData() {
            console.log(`this.title = ${this.title}`);
            this.input1 = this.title;
        },
    },
};
</script>
