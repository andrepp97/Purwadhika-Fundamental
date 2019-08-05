hitungBebek = (num) => {
    var bebek = 1000
    for (var i = 0; i < num; i++) {
        bebek = (bebek - (bebek * 20 / 100)) * 2
    }
    return bebek
}

// console.log(hitungBebek(1))

/**
 * 1 kandang = 1000 bebek
 * setiap bulan, 20% dari bebek ada yg mati
 * setiap bulan, bebek yg tersisa, berlipat 2
 * berapa bebek yg ada setelah n bulan
 */



babyShark = () => {
    var mainLyric = ['Baby shark', 'Mommy shark', 'Daddy shark',
        'Grandma shark', 'Grandpa shark', "Let's go hunt"
    ]

    var doo = ''
    var result = ''

    for (var k = 0; k < 6; k++) {
        doo += 'doo '
    }

    for (var i = 0; i < mainLyric.length; i++) {
        for (var j = 0; j < 3; j++) {
            result += `${mainLyric[i]} ${doo} \n`
        }
        result += mainLyric[i] + '\n'
    }

    return result
}

console.log(babyShark())





ciee = (arr) => {
    var alp = ' abcdefghijklmnopqrstuvwxyz'.split('')
    var result = ''
    // console.log(alp)
    for (var i = 0; i < arr.length; i++) {
        result += alp[arr[i]]
    }

    return result
}

// console.log(ciee([8, 1, 16, 16, 25, 0, 2, 9, 18, 20, 8, 4, 1, 25, 0, 13, 1, 21, 12]))