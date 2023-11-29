let vitorias=20
let derrotas=7
let saldoRanqueadas=calcularSadoPartidaRankeada(vitorias,derrotas)
let nivel=calcularNivel(saldoRanqueadas)
console.log("O Herói tem de saldo de "+saldoRanqueadas+" está no nível de "+nivel)

function calcularSadoPartidaRankeada(quantidadeVitorias, quantidadeDerrotas){
    let saldoRanqueadas=quantidadeVitorias-quantidadeDerrotas
    return saldoRanqueadas
}
function calcularNivel(saldoRanqueadas){
    let nivel
    if(saldoRanqueadas<10){
        nivel="Ferro"
    }else if(saldoRanqueadas>10 || saldoRanqueadas<=20){
        nivel="Bronze"
    }else if(saldoRanqueadas>20 || saldoRanqueadas<=50){
        nivel="Prata"
    }else if(saldoRanqueadas>50 || saldoRanqueadas<=80){
        nivel="Ouro"
    }else if(saldoRanqueadas>80 || saldoRanqueadas<=90){
        nivel="Diamante"
    }else if(saldoRanqueadas>90 || saldoRanqueadas<=100){
        nivel="Lendario"
    }else if(saldoRanqueadas>100){
        nivel="Imortal"
    }
    return nivel
}