const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

totAlpha = (input) => {
    let huruf = input.toLowerCase().split('')
    let hasil = 0

    for (let i = 0; i < huruf.length; i++) {
        hasil += alpha.indexOf(huruf[i]) + 1
    }

    return hasil
}

totGenap = (input) => {
    let huruf = input.toLowerCase().split('')    
    let hasil = 0

    for (let i = 0; i < huruf.length; i++) {
        var idx = alpha.indexOf(huruf[i]) + 1
        if (idx % 2 == 0) {
            hasil += idx
        }
    }

    return hasil
}

totGanjil = (input) => {
    let huruf = input.toLowerCase().split('')
    let hasil = 0

    for (let i = 0; i < huruf.length; i++) {
        var idx = huruf.indexOf(huruf[i])+1
        if (idx % 2 == 1) {
            hasil += alpha.indexOf(huruf[i]) + 1
        }
    }

    return hasil
}

// console.log(totAlpha('zzzzzzz'))

// console.log(totGenap('asodljwqfuhqw'))

// console.log(totGanjil('edjdj'))