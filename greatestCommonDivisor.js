
// GCD (Greatest Common Divisor) or HCF (Highest Common Factor) of two numbers 
//is the largest number that divides both of them.
function gcd($a, $b) {
    // Everything divides 0 
    if ($b == 0)
        return $a;

    return gcd($b, $a % $b);
}

//console.log(gcd(14, 21));


// gcd of array  

//The GCD of three or more numbers equals the product of the prime factors common to all the numbers,
// but it can also be calculated by repeatedly taking the GCDs of pairs of numbers.

//gcd(a, b, c) = gcd(a, gcd(b, c)) 
//            = gcd(gcd(a, b), c) 
//            = gcd(gcd(a, c), b)

const arr = [2, 4, 6, 8];
const n = arr.length;
function findGCD($arr, $n) {
    $result = $arr[0];
    for (let $i = 1; $i < $n; $i++)
        $result = gcd($arr[$i], $result);

    return $result;
}

console.log(findGCD(arr, n));