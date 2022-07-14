const tabela = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// DIAGONAL ESQUERDA:

//for(let coluna = 0; coluna < tabela.length; coluna++) {
    //console.log(tabela[coluna][tabela.length - 1 - coluna]);
//}

// DIAGONAL DIREITA:

for(let coluna = 0; coluna < tabela.length; coluna++) {
    console.log(tabela[coluna][coluna]);
} 