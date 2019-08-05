function delVocal(kalimat) {    
    console.log(kalimat.replace(/[aiueo]/gi, ''))
}

function parkir(lama) {
    let hasil;

    if (lama < 3) {
        hasil = lama*2000
    }else if(lama > 2){
        hasil = 4000 + ((lama-2)*500)
    }

    console.log("Tarif parkir anda : Rp " + hasil)
}

function cekGanjil(input) {
    if (input % 2 == 0) {
        console.log(input + " adalah angka Genap")
    }else{
        console.log(input + " adalah angka Ganjil")
    }
}

function maxNumb(arrNum) {
    let hasil = Math.max(...arrNum)
    console.log("Angka terbesar : " + hasil)
}

function filterStr(arr) {
    var filtered = arr.filter(Number)
    console.log(filtered)
}

function removeChar(sentence) {
    var hasil = sentence.slice(1, -1)
    console.log(hasil)
}

delVocal('hAlO nAmAkU BeNtO')

parkir(4)

cekGanjil(11)

maxNumb([33, 12, 8, 10, 11, 99])

filterStr(['Jeruk', 12, 4, , 'Bangke','Nanas', 39])

removeChar('Kamu itu tipe aku banget')