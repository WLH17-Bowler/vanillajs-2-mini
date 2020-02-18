const addTodo =(event) => {
    event.preventDefault()
    let item = document.createElement("li")
    item.innerText = document.getElementById("item").value
    item.addEventListener('click', completeTodo)

    let button = document.createElement('button')
    button.innerText = 'x'
    button.addEventListener("click", removeTodo)
    item.append(button)
    
    let list = document.querySelector("ul")
    list.appendChild(item)
}

const removeTodo = (event) => {
    event.target.parentNode.remove()
}

document.querySelector('form').addEventListener("submit", addTodo)

const completeTodo = (event) => {
    let value = event.target.getAttribute("aria-checked")
    if (value !== 'true') {
        event.target.setAttribute("aria-checked", "true");
    } else {
        event.target.setAttribute("aria-checked", 'false');
    }
    // (value !== 'true') ? event.target.setAttribute('aria-checked') : event.target.setAttribute('aria-checked', 'false')
}