function compras(tabalho1, trabalho2){
    const comprarSorvete = tabalho1 || trabalho2    // OU
    const comprarTv50 = tabalho1 && trabalho2       // AND
    // const comprarTv32 = !!(tabalho1 ^ trabalho2)    // Bitwise XOR
    const comprarTv32 = tabalho1 != trabalho2       // OU Exclusivo pode ser simulado com a diferença
    const manterSaudavel = !comprarSorvete          // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))