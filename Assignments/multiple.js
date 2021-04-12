
//First Method
// var counter=(arr)=>{
//     return arr.length;
// }


// var multi=(a,b)=>{
//     return a+b;
// }

// var pi=3.142;

// module.exports.counter=counter;
// module.exports.multi=multi;
// module.exports.pi=pi;


//Second Method
// module.exports.counter=(arr)=>{
//     return arr.length;
// }


// module.exports.multi=(a,b)=>{
//     return a+b;
// }

// module.exports.pi=3.142;


//Third One By Creating Object
var counter=(arr)=>{
    return arr.length;
}


var multi=(a,b)=>{
    return a+b;
}

var pi=3.142;

module.exports={
counter:counter,
multi:multi,
pi:pi
};