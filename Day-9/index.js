function tot(inputan) {
    var hasil;
    for (let i = 0; i < inputan.length; i++) {
        if (i == 0) {
            hasil = inputan[0]
        }else if(i%2 == 0) {
            hasil -= inputan[i]
        }else if(i%2 != 0){
            hasil += inputan[i]
        }
    }
    return hasil
}
// console.log(tot([1,12,22,24]))


let dataPelajar = {
    nama : 'Anakmu',
    umur : 24,
    ortu : [{nama : 'Bapakmu', umur : 55}, {nama: 'Ibumu', umur : 54}]
}
// console.log(dataPelajar.ortu[0].nama + ' Umur ' + dataPelajar.ortu[0].umur)


class Mobil{
    constructor(warna, tipe, merk, tahun){
        this.color = warna,
        this.type = tipe,
        this.brand = merk,
        this.year = tahun
    }
}

let data = [
    new Mobil('Hitam','Sedan','Toyota','2003'),
    new Mobil('Merah', 'SUV', 'Honda', '1999'),
    new Mobil('Kuning', 'City', 'Polygan', '2010')
]

displayTot = (x) => {
    let result = ''
    for (let i = 0; i < x.length; i++) {
        result += `
        ${(i+1)}. Warna: ${x[i].color}, Tipe: ${x[i].type}, Brand: ${x[i].brand}, Tahun: ${x[i].year}`
    }
    return result
}
// console.log(displayTot(data))


// =====Destructuring Object=====
var baju = {
    warna : 'Merah',
    size : 'M',
    harga : '100000',
    pemilik : {
        nama : 'Suryadi',
        toko : 'Jaya Baru'
    }
}

var{color, size, harga} = baju
var{nama, toko} = baju.pemilik
// console.log(`Warna : ${color}, Size : ${size}, Harga : ${harga}, Pemilik : ${nama}, Toko : ${toko}`)

function filters(arr, fWarna = '', fTipe = '', fMerk = '', fTahun = '') {
    var arrHasil = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].color.includes(fWarna) && arr[i].type.includes(fTipe) && arr[i].brand.includes(fMerk) && arr[i].year.includes(fTahun)) {
            arrHasil.push(arr[i])
        }
    }

    return displayTot(arrHasil)
}

console.log(filters(data, '', 'City'))