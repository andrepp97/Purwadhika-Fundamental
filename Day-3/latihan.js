// // // var arr = ['Buzz']

// // // for (var i = 1; i < 12; i++) {
// // //     // arr.push(i, i+1, 'Buzz')
// // //     if (i%3 == 0) {
// // //         arr.push('Buzz')
// // //     }else{
// // //         arr.push(i)
// // //     }
// // // }

// // // console.log(arr)


// // let pattern = ''

// // for (let i = 0; i <= 5; i++) {

// //     pattern += '#'

// //     for (let j = 5; j > i; j--) {
// //         pattern += '#'
// //     }

// //     pattern += '\n'

// // }
// // console.log(pattern)


// let pattern = ''

// for (let i = 0; i < 5; i++) {
    
//     pattern += '*'

//     for (let j = 4; j > i; j--) {
//         pattern += '*'
//     }

//     pattern += '\n'

// }

// console.log(pattern)


let pattern = ''

for (var i=1;i<=5;i++){
    for (var j=i;j<=5;j++){
        pattern += ' '
    }

    for (var k=1;k<=i;k++){
        pattern += '*'
    }

    for (var l=1;l<=i-1;l++){
        pattern += '*'
    }
        pattern += '\n';
    }

    console.log(pattern)