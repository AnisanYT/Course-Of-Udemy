// window.onload = () => {
//     const inputValue = document.getElementById("TODO");
//     const addFun = document.getElementById("TODO-Submit")
//     const lista = document.getElementById("TODO-list")

//     addFun.addEventListener("click", (event) => {
//         event.preventDefault()
//         lista.innerHTML =  aux
//         let aux =  lista.innerHTML + "<li>"+ inputValue.value +"</li>"
//         inputValue.value = ""
//     })
// }

const arr = ["Angel", "Ricardo", "Hola", 2, 21, {}]
let num = 1
const template = arr.map(t => {
    return "Datos #" + num++ + ": " + t + " y es un tipo " + typeof(t)
})

console.log(template.join("\n"))
