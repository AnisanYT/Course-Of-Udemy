// window.onload = () => {
    
//     const inputValue = document.getElementById("TODO");
//     const addFun = document.getElementById("TODO-Submit")
//     const lista = document.getElementById("TODO-list")
//     const limpiar = document.getElementById("TOOD-clear")
    
//     addFun.addEventListener("click", (event) => {
//         event.preventDefault()
//         let aux =  lista.innerHTML + "<li>"+ inputValue.value +"</li>"
//         inputValue.value = ""
//         lista.innerHTML = aux;
//     })

//     limpiar.addEventListener("click", (event) => {
//         event.preventDefault()
//         lista.innerHTML = ""
//     })
// }

// const arr = ["Angel", "Ricardo", "Hola", 2, 21, {}]
// let num = 1
// const template = arr.map(t => {
//     return "Datos #" + num++ + ": " + t + " y es un tipo " + typeof(t)
// })

// console.log(template.join("\n"))

const actualizaTodos = (todos) => {
    const todoStrings = JSON.stringify(todos)
    localStorage.setItem('todos', todoStrings)
}

const todos = JSON.parse(localStorage.getItem('todos')) || []

const render = () => { //Recursividad
    const todoList = document.getElementById("TODO-list")
    const todosTemplate = todos.map(t => '<li>' + t + '</li>')
    todoList.innerHTML = todosTemplate.join('')
    const elementos = document.querySelectorAll('#TODO-list li') //captura <li> 
                                                                 //dento del elemento 
                                                                 //de ID toodlist
    elementos.forEach((elemento, indice) => {
        elemento.addEventListener('click', ()=>{
            elemento.parentNode.removeChild(elemento)
            todos.splice(indice, 1)
            actualizaTodos(todos)
            render()
        })
    })
}

window.onload = () =>{
    render()
    const form = document.getElementById('todo-form')
    form.onsubmit = (e) => {
        e.preventDefault()
        const todo = document.getElementById('TODO')
        const todoText = todo.value
        todo.value = ''
        todos.push(todoText)
        actualizaTodos(todos)
        render()
    }
}