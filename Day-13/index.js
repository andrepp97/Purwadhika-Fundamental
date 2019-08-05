// ------------ KISI KISI ----------------

// var arr = [1,2,3,4,5]

// console.log(arr.map((val)=>{
//     return val += ' Ntap Lur'
// }))


// setInterval(() => {
//     var d = new Date
//     console.log(`${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`)
// }, 1000);

var totBayar = 30000
var cicilan = 2500

// console.log(totBayar/cicilan)


var ayam = 400
var diambil = 16
var hasil = 400 - (16*4)

// console.log(hasil)


class Barang{
    constructor(item, qty, price){
        this.item = item
        this.qty = qty
        this.price = price
    }
}

var cart = [
    new Barang('Sego Tiwul', 5, 7500),
    new Barang('Sego Jagung', 3, 9000)
]

function totHarga(data) {
    var total = 0

    for (let i = 0; i < data.length; i++) {
        total += data[i].qty * data[i].price
    }

    console.log(total)
}

totHarga(cart)