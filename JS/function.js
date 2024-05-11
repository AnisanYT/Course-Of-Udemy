const arrs = [1, 2, 3, "Hola"]
const arrs1 = ["Daniel", "Juan", "Deadpool", "League Of Legends"]
function iterar (arr, arr1) {
    for (let j = 0; j < arr.length; j++) {
        console.log(arrs[j])    
    }
    for (let j = 0; j < arr1.length; j++) {
        console.log(arrs1[j])    
    }
}

// iterar(arrs, arrs1)

const a = 2
const b = 2
function suma (a, b) {
    // console.log(a+b)
    const retornaSuma = a + b
    return retornaSuma
}

const resut = suma(23, 6)
// console.log(resut)

// --------------------------------------------------------------------------------
// CALBACKS || Un callback es una funcion que se ejecuta al final de la funcion

function sumarDosParameter (a, b, callb) {
    const resultados = a + b
    callb(resultados)
}

function callb (r) {
    console.log(r)
}

// sumarDosParameter(2, 44, callb)

// --------------------------------------------------------------------------------
//FAT ARROW FUNCTION 

const miFatArrowFunction = (a, b) => a + b
// console.log(miFatArrowFunction(2,2))
const arrowF = (a, b) => {
    return a + b
}
// console.log(arrowF(2,3))

// -------------------------------------------------------------------------------
// Funciones anonimas || funcion que no tiene nombre

sumarDosParameter(2, 3, function(r) {
    console.log("Es una funcion anonima y mi resultado es: ", r)
})


