function suma (i,j,k) {
    let suma = 0 

    for (let index = i; index < j; index++) {
        suma = suma + index
        console.log(suma)
    }

    for (let index2 = j; index2 >= k; index2--) {
        suma = suma + (index2)
        console.log(suma)
    }

    console.log(suma)
}

suma(5,9,6)