// Get DayName, MonthName, Year
let arrBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
let arrHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']

let today = new Date()

let hari = arrHari[today.getDay()]
let bulan = arrBulan[today.getMonth()]
let tahun = today.getFullYear()

console.log('Hari ini adalah hari ' + hari + ' bulan ' + bulan + ' tahun ' + tahun)


// Function
function hitung(x,y) {
    for (let i = 1; i <= x; i++) {
        let result = i * y

        console.log(result)
    }
}

hitung(5,7)