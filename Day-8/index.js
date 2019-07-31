// ======= OBJECT ========

var pemainBola = {
    name : 'Cristiano Ronaldo',
    tinggi : '180',
    berat : '78',
    tim : 'Juventus',
    atribut : {
        shotPower : 99,
        speed : 96,
        passing : 89,
        jump : 92
    }
}

var diriku = {
    nama : {
        depan : 'Andre',
        belakang : 'Putera Pratama'
    },
    pekerjaan : 'Mahasiswa Immortal',
    hobi : 'Coding',
    fullName : function () {
        return this.nama.depan + " " + this.nama.belakang
    }
}

// console.log('Nama Saya ' + diriku.fullName())
// console.log('Aku adalah seorang ' + diriku.pekerjaan)
// console.log('Aku suka ' + diriku.hobi)


// ====== CLASS ======

class Human {
    constructor(a,b,c){
        this.nama = a,
        this.pekerjaan = b,
        this.hobi = c
    }
}

let orang = new Human('Andre','Mahasiswa Immortal', 'Minum')
// console.log(orang)


// ====== TUGAS SIANG =======
function tot(input) {
    let bilNegatif = 0
    let bilPositif = 0
    let arrBro = []

    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            bilNegatif += input[i]
        }else{
            bilPositif += input[i]
        }
    }
    arrBro.push(bilPositif)
    arrBro.push(bilNegatif)
    return arrBro
}

console.log(tot([1,4,5,-3,-3]))