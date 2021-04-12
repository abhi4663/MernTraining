const got = require('got');

(async () => {
    try {
        const response =await got('http://www.google.com/');
        console.log(response.body);
    } catch (error) {
        console.log(error.response.body);      
    }
})();
