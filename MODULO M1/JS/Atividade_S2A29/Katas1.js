function matrix10(arraynumbers){

    let maiorValorLocalizacao = [];
    let maiorValor = 0;
    let linha = 0;
    let coluna = 0;

    for (let i = 0; i < arraynumbers.length; i++) {
        maiorValor= 0;
        let innerArrayLength = arraynumbers[i].length;
        
        for (let j = 0; j < innerArrayLength; j++) {
            if (maiorValor < arraynumbers[i][j]) {
                maiorValor = arraynumbers[i][j];
                linha = i;
                coluna = j;
            }
        }
        maiorValorLocalizacao.push(`linha ${linha} - coluna ${coluna} - valor ${maiorValor}`);
    }
    console.log(maiorValorLocalizacao);
} 
arraynumbers = [
    [0, 10, 20, 30,
    40,  50, 60, 70, 80,
    90, 100
    ],
    [0, 10, 20, 30,
    40,  500, 60, 70, 80,
    90, 100
    ],
    [0, 10, 20, 30,
    40,  50, 60, 700, 80,
    90, 100
    ],
    [0, 10, 20, 30,
    40,  50, 60, 70, 800,
    90, 100
    ],
    [0, 10, 200, 30,
    40,  50, 60, 70, 80,
    90, 100
    ],
    [0, 10, 20, 300,
    40,  50, 60, 70, 80,
    90, 100
    ],
    [0, 10, 20, 30,
    40,  50, 60, 70, 80,
    90, 100
    ],
    [0, 1000, 20, 30,
    40,  50, 60, 70, 80,
    90, 100
    ],
    [0, 10, 20, 30,
    40,  50, 60, 70, 80,
    90, 100
    ],
    [ 0, 10, 20, 30,
    400,  50, 60, 70, 80,
    90, 100
    ]
];
matrix10(arraynumbers);