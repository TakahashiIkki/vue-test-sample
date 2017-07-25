var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello ',
        name: ""
    },
    methods: {
        greet: function (event) {
            this.name = "Vue!";
        },
        clearGreet: function (event) {
            this.name = "";
        }
    }
});