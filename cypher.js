// var a = ['A','B','C','D','E','F','G','']
// let alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));


function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (i = charA.charCodeAt(0); i <= j; i++) {
        console.log(i);
        a.push(String.fromCharCode(i));
    }
    return a;
}

function CaesarCipher(str, num) {
    // you can comment this line
    str = str.toLowerCase();
    var result = '';
    var charcode = 0;

    for (var i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + num;
        result += String.fromCharCode(charcode);
    }
    return result;

}
var caesarShift = function(str, amount) {
	// Wrap the amount
	if (amount < 0)
		return caesarShift(str, amount + 26);

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		// Get the character we'll be appending
        var c = str[i];
   

		// If it's a letter...
		if (c.match(/[a-z]/i)) {

			// Get its code
            var code = str.charCodeAt(i);
            

			// Uppercase letters
            if ((code >= 65) && (code <= 90))
                {let cal = (code - 65 + amount);
                    console.log(cal);
                let cal2 = (cal % 26)
                console.log(cal2);
                let cal3 = cal2+65;
                console.log(cal3);
				c = String.fromCharCode( cal3);}

			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

		}

		// Append
		output += c;

	}

	// All done!
	return output;

};
                               
console.log(caesarShift('Zyz', -1));

// let decode = genCharArray('d','z')
// let alphabet = genCharArray('a','z');
// console.log(decode);