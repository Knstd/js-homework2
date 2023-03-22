function primeNumbersCheck(n) {
    if (n < 2) {
        return false
    }
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}

function primeNumbersList(n) {
    let numbersList = []
    let number = 2
    while (numbersList.length < n) {
        if (primeNumbersCheck(number)) {
            numbersList.push(number)
        }
        number++
    }
    return numbersList
}

console.log(primeNumbersList(process.argv[2]));
