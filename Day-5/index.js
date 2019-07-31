let kata = 'Halo Halo Bandung'
let buah = 'Jeruk, Taek, Asu'

// console.log(kata.replace(/[aiueo]/gi, ''))

// console.log(buah.split(', ')[2])

// console.log(kata.replace(/[ba]/gi, ''))  

// console.log(buah.slice(7,16))

// console.log(kata.trim().indexOf('d'))

// console.log(kata.lastIndexOf('a'))


let arrBuah = ['Buah Naga', 'Buahjingan']
let arrBuah2 = ['Buah Bibir', 'Buah Tangan']
let arrNum = [1,4,6,1,2,1,90,24,55,'Dancok', 'Asu']
// arrBuah.pop()
// arrBuah.shift()
let arr = arrBuah.concat(arrBuah2)
arr.splice(2,0, 'Buah Sikil', 'Buah Bangsat')

// console.log(arrBuah.toString())


//Callback function
console.log(arrNum.sort(function(a,z) {
    return a-z  
}))

console.log(arrNum.filter(Number))