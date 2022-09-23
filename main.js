let form = document.querySelector("form")
form.addEventListener("submit",savetodo)
let input = document.querySelector("input")
let ul = document.querySelector("ul")

function savetodo(e){
    e.preventDefault();
    let icon = document.createElement("i")
    icon.className = "bi bi-trash"
    let li = document.createElement("li")
    li.innerHTML = `<span> <input type="checkbox"> ${input.value}</span>`
    ul.appendChild(li)
    li.appendChild(icon)
    form.reset()
}

ul.addEventListener("click",delTodo);

function delTodo(e){
    if(e.target.className.includes("bi")){
        let li = e.target.parentElement;
        ul.removeChild(li);
    }
}

let Btn = document.querySelector("button");
Btn.addEventListener("click",darkMode)

function darkMode(e){
    let dark = document.getElementsByTagName('body');
    dark[0].classList.toggle("darkTheme");
}


