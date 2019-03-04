function generator(input) {
    var index = 0;
    return {
        next: function () {
            if (index < input.length) {
                index += 1;
                console.log(index);
                return input[index - 1];
            }
            return "";
        }
    }
}

let a = generator('abc');
console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());