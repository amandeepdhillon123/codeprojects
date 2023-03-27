

// const a=" amandeep";

// case 1 
/*
module.exports  = {
    a:"dsdas",
    b:"adbasjdba"
}

*/


// case 2

// module.exports.simpleMesaage =" hello world ";



// case 3

// exports.log = function(msg) {
//     console.log(msg + "jai shree tam");
// }


// case 4 function class 

module.exports = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () { 
        return this.firstName + ' ' + this.lastName;
    }
}

