const app = new Vue({
  el: '#app',

  data: {

    mailsArray: [],

  },

  methods: {

    generateMails() {
      for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then(function (axiosResp) {
            let mail = axiosResp.data.response;
            this.mailsArray.push(mail);
          });
        console.log(this.mailsArray);
      }

    },
  },


});