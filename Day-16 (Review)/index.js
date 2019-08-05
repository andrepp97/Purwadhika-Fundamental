// duplikat function sorting
function sortBro(arr, func) {
    arr.sort(func)
    console.log(arr)
}
// sortBro(arrData, function(a,b){return a-b})


var arrData = [2, 5, 11, 3]

function totArr(arr) {
    var sorted = arr.sort(function (a, b) {
        return b - a
    }) 
    return sorted[0] - sorted[1]
}
// console.log(totArr(arrData))


var str = 'ghxd'

function masBro(x) {
    var result = ''
    x.split('')
    for (let i = 0; i < x.length; i++) {

        for (let j = 0; j <= i; j++) {
            if (j==0) {
                result += x[i].toUpperCase()
            }else{
                result += x[i]
            }            
        }
        result += '-'
    }

    return result.slice(0,-1)
}
// console.log(masBro(str))


function kaprekarsBro(inputan) {
    inputan = inputan.toString()
    var gede = parseInt(inputan.sort().join(''))

    var kecil = parseInt(inputan.sort(function (a, b) {
        return a - b
    }).join(''))

    console.log(gede + ' - ' + kecil)
    return gede - kecil
}

var numb = 4521
console.log(kaprekarsBro(numb))