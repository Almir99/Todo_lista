const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

// function for adding lists
const generate_template = (a) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${a}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`
    list.innerHTML += html;
}
//function for filtering
const filtering = (to_filter) =>{
    Array.from(list.children)
        .filter((value) =>{
            return !value.textContent.includes(to_filter)
        })
        .forEach((value) =>{
            value.classList.add("filtered")
        })
    Array.from(list.children)
        .filter((value) =>{
            return value.textContent.includes(to_filter)
        })
        .forEach((value) =>{
            value.classList.remove("filtered")
        })
}

addForm.addEventListener("submit", e =>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo !== ""){
        generate_template(todo);
        addForm.add.value = ""; // also addFarm.reset() can be used ;
    }else {
        addForm.add.value = "";
    }
})

// To delete the list
list.addEventListener("click", e => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});

// To search for a specific list
search.addEventListener("keyup", () => {
    const value = search.value.trim();
    filtering(value);
});

