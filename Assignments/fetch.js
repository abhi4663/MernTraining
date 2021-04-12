const fetch=require('fetch');
fetch('https://www.google.com/')
    .then(res =>{
        console.log(res);
    })
    .then(body => console.log(body));