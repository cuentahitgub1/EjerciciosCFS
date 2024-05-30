function promedio (arr){
    let suma = 0
        for (let i = 0; i<arr.lenght;i++)
            {suma = suma + arr[i]}
    return suma/arr.lenght
}

promedio([1, 5, 4, 6, 8, 7, 6, 44, 56, 25, 56, 44])