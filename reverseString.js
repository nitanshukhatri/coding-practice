// function reverse(str) {
//     var rtnStr = '';
//     for (var i = str.length - 1; i >= 0; i--) {
//         rtnStr += str[i];
//     }
//     return rtnStr;
// }

function reverse(str) {
    if (!str || str.length < 2) return str;

    return str.split('').reverse().join('');
}


console.log(reverse('you are a nice dude'));