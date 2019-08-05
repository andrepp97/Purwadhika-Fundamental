//====== MERGE SORT =======
function merge(left, right) {
    var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
    while (l < lLen && r < rLen) {
        if (left[l] < right[r]) {
            result.push(left[l++]);
        } else {
            result.push(right[r++]);
        }
    }
    //remaining part needs to be addred to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
}

function mergeSort(arr) {
    var len = arr.length;
    if (len < 2)
        return arr;
    var mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);
    //send left and right to the mergeSort to broke it down into pieces
    //then merge those
    return merge(mergeSort(left), mergeSort(right));
}

// console.log(mergeSort([1,6,2,3,8]))


function lipatTiga(a,b) {
    var hasil = ''

    for (let i = a; i <= b; i++) {
        if (i % 3 == 0) {
            hasil += i + '\n'
        }
    }
    return hasil
}
// console.log(lipatTiga(1,10))


function deretBil(a) {
    var result = []
    var tot = 0

    for (let i = 1; i <= a; i++) {
        tot += i    
        result.push(i)
    }

    result = result.join(" + ")
    result = result + ' = ' + tot

    return result
}
// console.log(deretBil(6))


var caesarShift = function (str, amount) {
    // Wrap the amount
    if (amount < 0)
        return caesarShift(str, amount + 26);

    // Make an output variable
    var output = '';

    // Go through each character
    for (var i = 0; i < str.length; i++) {

        // Get the character we'll be appending
        var c = str[i];

        // If it's a letter...
        if (c.match(/[a-z]/i)) {

            // Get its code
            var code = str.charCodeAt(i);

            // Uppercase letters
            if ((code >= 65) && (code <= 90))
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

            // Lowercase letters
            else if ((code >= 97) && (code <= 122))
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }

        // Append
        output += c;

    }

    // All done!
    return output;
};

console.log(caesarShift('vincent',2))