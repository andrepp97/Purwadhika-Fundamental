let arrItem = ['Jeruk', 'Apel', 'Leci']
let arrPrice = [3000, 7000, 10000]
let hasil = ''

tambahItem = (item, price) => {
    // Tambah item
    arrItem.push(item)
    arrPrice.push(price)

    for (let i = 0; i < arrItem.length; i++) {
        let item = arrItem[i]
        let harga = arrPrice[i]
        hasil += i + 1 + ". " + item + " Rp " + harga + '\n'
    }
    return hasil
}

// console.log(tambahItem('Buahahaha', 22000))


var arrKota = ['Jakarta', 'Tangerang', 'Bandung', 'Surabaya']
var arrKode = [331, 332, 421, 512]

delItem =  (kota) =>{
    // Delete item
    x = arrKota.indexOf(kota)
    arrKota.splice(x,1)
    arrKode.splice(x,1)

    console.log(arrKota)
    console.log(arrKode)
}

showItem = (kota) => {
    kode = arrKode[arrKota.indexOf(kota)]
    console.log('Kota : ' + kota + "  Kode : " + kode)
}

showItem('Solo')
