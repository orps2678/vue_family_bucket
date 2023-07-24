const app = Vue.createApp({
    data(){
        return{
            name:"小名",
            cool:["小綠", "小紅"],
            xx:{
                xxs:123
            }
        }
    }
});
app.mount("#app");