function medianBro(values) {
    if (values.length === 0) return 0;

    values.sort(function (a, b) {
        return a - b
    });

    let half = Math.floor(values.length / 2)

    if (values.length % 2)
        return values[half]

    return (values[half - 1] + values[half]) / 2.0
}

console.log(medianBro([100,55,12,20,22,40,56,70]))