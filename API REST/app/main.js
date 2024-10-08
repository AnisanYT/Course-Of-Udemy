const loadInitialTemplate = () => {
    const template = `
        <h1> usuarios </h1>
        <form id="user-form">
            <div>
                <label>
                Nombre:
                </label>
                <input name="username" />
            </div>
            <div>
                <label>
                Apellido:
                </label>
                <input name="lastname" />
            </div>
            <button type="submit">Enviar</button>
        </form>
        <ul id="user-list">
        </ul>
    `
    const body = document.getElementsByTagName('body')[0] 
    body.innerHTML = template
}

const getUsers = async () => {
    const response = await fetch('/user')
    const users = await response.json()
    const template = user => `
        <li>
            ${user.username} ${user.lastname} <button data-id="${user._id}">Eliminar</button>
        </li>
    `

    const component = document.getElementById('user-list')
    component.innerHTML= users.map(user => template(user)).join('')
    users.forEach(user => {
        const userNode = document.querySelector(`[data-id="${user._id}"]`)
        userNode.onclick = async e => {
            await fetch(`/user/${user._id}`, {
                method: "DELETE", 
            })
            userNode.parentNode.remove()
            alert('Usuario eliminado')
        }
    })
}

const addFormListener = () => {
    const userForm = document.getElementById('user-form')
    userForm.onsubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(userForm)
        const data = Object.fromEntries( formData.entries() )   //formData.entries() devuelve un iterador de los datos que hay en el formulario
                                                                //Object.fromEntries() es convertir las entradas del formulario en un objeto
                                                                //legible por JavaScript, conviertiendo los iterables en las claves.
        await fetch('/user', {
            method: 'POST',
            body: JSON.stringify(data),
            headers:  {
                'Content-Type': 'application/json'
            }
        })
        userForm.reset()
        getUsers()
    }
}

window.onload = () =>{
    loadInitialTemplate()
    addFormListener()
    getUsers()
}