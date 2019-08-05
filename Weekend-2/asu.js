function kali(x, y) {
    var hasil = ''

    for (let i = x; i <= y; i+=x) {
        hasil += i + ' '
    }

    return hasil
}

console.log(kali(2,10))