const fs=require('fs');
const axios=require('axios');

    axios.get('http://www.google.com')
    .then(function (response,body) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })


   