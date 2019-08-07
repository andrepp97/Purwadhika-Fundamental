oddArray = (inputan) => {
    let arrKecil = []
    let arrTemp = []
    let arrHasil = []

    for (let i = 1; i <= inputan; i++) {

        for (let j = 1; arrKecil.length<=i; j++) {

            if (arrKecil.length == i) {
                break
            } else {
                if (j % 2 != 0) {
                    if (arrTemp.includes(j)) {
                        false
                    }else{
                        arrKecil.push(j)
                        arrTemp.push(j)
                        kecil = arrKecil[arrKecil.length - 1]
                    }
                }
            }

        }

        arrHasil.push(arrKecil)
        arrKecil = []
    }

    return arrHasil
}

console.log(oddArray(10))