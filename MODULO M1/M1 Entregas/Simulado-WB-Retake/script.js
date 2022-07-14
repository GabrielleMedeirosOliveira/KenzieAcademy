function genericFunction(arr){
    let controle = 0;
    for(let i = 0; i <arr.length; i++){
        if (arr[i] % 2 === 0)
        controle += arr[i];
    }
    return controle;
}

arr = [1,3,5,7]
console.log(genericFunction(arr));

/* TESTE DE MESA:


controle = 0 / let i = 0 / i < arr.length / if (arr[i] % 2 === 0) / controle += arr[i] / i++ / return/
controle = 0/ i = 0 / i < arr. length, TRUE/ if (arr[2] % === 0), TRUE / controle = 0 + 2 = 2 / i++ / -
contole = 2/ i = 1/ i < arr.length, TRUE/ if( arr[1] % 2 === 0), FALSE/ ---- / i++ / -
controle = 2/ i = 2/ i< arr.length, TRUE/ if ( arr[2] % === 0), TRUE/ controle = 2 + 2 = 4/ i++/ - 
controle = 4/ i = 3/ i< arr.length, TRUE/ if (arr [3] % === 0), FALSE/ ------/ i++/ -
controle = 4/ i = 4/ i<arr.length, FALSE/ ---------/------/------/ return = controle = 4
*/