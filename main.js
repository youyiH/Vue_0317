// 常數 時鐘 = { 資料 () {} }
const clock = {
    data() {
        return {
            h:99,
            m:99,
            s:99
        }
    },

    methods: {
        // 更新時鐘
        updateClock() {
            var date = new Date();
            // console.log(date);
            // 更新 小時、分鐘、秒數
            this.h = date.getHours();
            this.m = date.getMinutes();
            this.s = date.getSeconds();
        }
    },

    mounted() {
        // 設定間隔 (函式，間隔)
        setInterval(this.updateClock, 1000);
    }
};

// Vue 建立 APP(常數名稱-時鐘).安裝("ID 時鐘")
Vue.createApp(clock).mount("#clock");