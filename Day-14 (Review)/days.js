convertDays = (input) => {
    var y = 365
    var m = 30
    var w = 7
    var d = 1
    var sisa = 0

    var tahun = Math.floor(input/y)

    var bulan = input - (tahun*y)
    bulan = Math.floor(bulan / m)

    var week = (input - (tahun * y)) - (bulan*m)
    week = Math.floor(week/w)

    var day = (input - (tahun * y)) - (bulan * m) - (week*w)

    return `${tahun} Tahun ${bulan} Bulan ${week} Minggu ${day} Hari`
}
console.log(convertDays(500))