let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global) // global é igual ao window do browser

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // arrow function tem maior peso que o binding
comparaComThisArrow(module.exports)