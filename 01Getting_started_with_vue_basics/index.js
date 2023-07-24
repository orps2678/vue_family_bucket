const app = Vue.createApp({
    data(){
        return{
            name:"小名",//data數據傳遞
            yahoo_link:'https://tw.yahoo.com/',
            google_link:'https://www.google.com.tw/?hl=zh_TW',//縮寫 HTML屬性中綁定data中的數據
        }
    }
});
app.mount("#app");