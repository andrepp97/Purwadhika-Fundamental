// ==== MAPPING ====
let arr = ['Kacang', 'Peanut', 'Nut', 'Koro']
let sum = 0

let hasil = arr.map((val, idx) => {
    return `${idx + 1}. ${val}`
})

console.log(hasil)