/*
- Fazeruma matriz de 5 linhas e 5 colunas, ou seja:
[
    [i=0, 0, 1, 2, 3, 4]
    [i=1, 0, 1, 2, 3, 4]
    [i=2, 0, 1, 2, 3, 4]
    [i=3, 0, 1, 2, 3, 4]
    [i=4, 0, 1, 2, 3, 4]
]

- Fazer com que cada laço de repetiçao (ou seja, a cada volta) ele preencha 1 a 
diagonal e acrescente 0 nas outras posições, ou seja:

[
    [i=0, 1, 0, 0, 0, 0]
    [i=1, 0, 1, 0, 0, 0]
    [i=2, 0, 0, 1, 0, 0]
    [i=3, 0, 0, 0, 1, 0]
    [i=4, 0, 0, 0, 0, 1]
]

Estrutura do meu codigo vai ser:

função (parametro)
for da linha: for( let i = 0; i <= 5; i++)
variavel de controle com o indice da linha e da coluna: control = control[i][j]
for da coluna: for( let j = 0; j <= 5; i++) 
if para chegar se a coluna esta preenchida: if(control !== 0)
*/

numbers = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i][i]);
}

