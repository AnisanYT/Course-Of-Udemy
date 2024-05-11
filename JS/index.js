// console.log("Hola mundo") //Asi comentamos en la consola 

//TIPOS DE DATOS EN JS
// String (cadena de caracteres), "A" "Oraciones como estas" "Hola mundo" "Chanchito Feliz"
// Boolean, true or false
// Null: es un valor, nulo. Por ejemplo, que una variable esta vacía. 
//Number: Cualquier número dentro de JS. 
// Undefined: No ha sido definidio. 
// Object: Es un objeto, además son estructuras que nos permiten agrupar todo tipos de datos anteriormente dichos.

//Variables:
// var: Esta variable se define al principio, independientemente de donde sea declarada. Pero, en general es global. 
// let: Es una variable mas privada, no se define de forma global y es mas segura.
// const: Es una variable constante, no puede cambiar. 

let variable = "Hola mundo, soy una variable."
// console.log(variable)
//Mutabilidad, es lo que hemos hecho aquí, cuando le cambiamos el valor a una variable o conjunto de variables.
variable = "Hola, cambiaré algo nada mas."
// console.log(variable)

//NOTA: Palabras reservadas, nombres o conceptos propiamente del lenguaje de programacion como "let", "var", "const"
let myBoolean = true
let myOtherBoolean = false

// console.log("Estos son valores booleanos: ", myBoolean, myOtherBoolean)


let myNumber = 1
let myOtherNumber = -1

let variableUndifined
let nulo = null
// console.log("Esto es número: ", myNumber, myOtherNumber)
// console.log("Este es un valor que no ha sido definido: ", variableUndifined, " Y este nulo: ", nulo)


//OBJETO: Una agrupacion de dato, hacen sentido entre sí. Los objetos tienen PROPIEDADES
//Objeto vacio 
const myFirstObject = {}

//Objeto con propiedades
const myOtherObject = {
    unNumero: 21,
    name: "Daniel",
    condicion: true, //Es buena practica dejar la coma al final, aun que sea la ultima propiedad. 
}

// console.log(myOtherObject.name)
//or 
// console.log(myOtherObject)

//ARREGLOS EN JS

const arrEmpty = []
const myArreglo = [1, 2, 3, "Hola", "Mundo"]

//PUSH
//Push es para añadir a un array un valor. 
myArreglo.push("Hola este es un dato que he metido con el metodo push()")
console.log("Arreglo vacio: ", arrEmpty, " Arreglo con datos: ", myArreglo) 




// -------------------------------------------------------------------------------
// OPERADORES MATEMATICOS 
//Suma, resta, multiplicacion, division 

const suma = 1 + 2
const resta = 4 - 2
const mul = 4 * 2
const div = 4 / 2
console.log("Suma: ", suma, "Resta: ", resta,"Multiplicacion: ", mul,"Division: ", div)

// Modulo
const modulo = 10 % 3
console.log("Modulo de 10 % 3: ", modulo)
// Incrementar y decrecer variables
let num = 5
// num++
// console.log("Aqui subimos a uno con ++", num)
// num--
// console.log("Aqui restamos a uno con --",num)

// tambien podemos realizar sumas y restas de forma sencilla con += o -= 

// num += 2
// console.log("Aqui sumamos 2 a valor de num que vale 5",num)
// num -= 2
// console.log("Aqui restamos 2 a valor de num que vale 7",num)
// num /= 2
// console.log("Aqui dividimos entre 2 a valor de num que vale 5",num)
// num *= 2
// console.log("Aqui multiplicamos por 2 a valor de num que vale 2.5",num)

// -------------------------------------------------------------------------------
//OPERADORES DE COMPARACION

const result = 6 === "6" //Es menos estricto y da false 
const result2 = 6 == "6" // Esto da true por que es menos estricto 
console.log(result, result2)

const resultado = 5 < 6
const resultado2 = 5 < 5
// Y otros operadores como mayor igual o menor igual, i know 
console.log(resultado, resultado2)



const resultados = 6 !== "6" //Es menos estricto y da true 
const resultados2 = 6 != "6" // Esto da false por que es menos estricto
console.log(resultados, resultados2)


// -------------------------------------------------------------------------------
// Operadores logicos -> or (||), and (&&), not (!)

const resutladoOr = false || false || true|| false||false // Si una condicion es falsa entonces todo es falso 
console.log("Resutlado de Or: ", resutladoOr)


const resultadoY = true && true && false && true && true // Si las dos condiciones son verdaderas entonces es verdadero mientras no hay uno falso
console.log("Resultado de Y: ", resultadoY)

const resultadoNegative = !true //Niega el resultado booleano, es decir que si es true el resultado es false y viceversa
console.log("El resultado de negative: ", resultadoNegative)

// -------------------------------------------------------------------------------
//CONTROL DE FLUJO (if || while || switch || for )
const hola = "hola"
if(hola == "hola"){
    console.log("Hola esto si es igual a hola")
} else {
    console.log("Hola, realmente esto no es igual a hola, lo lamento.")
}

let semana = "Miercoles"
switch (semana) {
    case "Lunes":
        console.log("El día de la semana que buscas es Lunes")
        break;
    case "Martes":
        console.log("El día de la semana que buscas es Martes")
        break;
    case "Miercoles":
        console.log("El día de la semana que buscas es Miercoles")
        break;         
    default:
        console.log("Realmente no se que estas buscando.")
        break;
}


let x = 0
while(x < 5) {
    console.log(x)
    x++
}
console.log("Termino el while")


for (let i = 0; i < 5; i++){
    console.log(i)
}

//Podemos recorrer un arreglo

console.log("Empieza el for")
const arrs = [1, 2, 3, "Hola"]
for (let j = 0; j < arrs.length; j++) {
    console.log(arrs[j])    
}


