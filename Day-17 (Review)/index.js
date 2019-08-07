// Fibonacci numbers
function fibo(limit) {
    var fib = [0, 1];

    for (let i = 2; i < limit; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }

    return fib
}

// console.log(fibo(10));



// Palindrome
function palindromeCheck(inputan) {
    let backward = inputan.split('').reverse().join('')

    if (inputan == backward) {
        return `${inputan} adalah Palindrome`
    }else{
        return `${inputan} bukan Palindrome`
    }
}

console.log(palindromeCheck('jiancok'))