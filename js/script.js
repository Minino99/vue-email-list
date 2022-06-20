const app = new Vue({
  el: '#app',

  data: {

    mailsArray : []

  },

  methods: {

    generateMails() {
      this.mailsArray = [];
      for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((axiosResp) => {
            this.mailsArray.push(axiosResp.data.response);
          });
      }

    }
  }


});