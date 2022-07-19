const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

// funkcija za dodavanje liste
const generisanje_templajta = (a) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${a}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`
    list.innerHTML += html;
}
//funkcija za filtriranje
const filtriranje = (filtrirati) =>{
    Array.from(list.children)
        .filter((vrijednost) =>{
            return !vrijednost.textContent.includes(filtrirati)
        })
        .forEach((vrijednost) =>{
            vrijednost.classList.add("filtrirano")
        })
    Array.from(list.children)
        .filter((vrijednost) =>{
            return vrijednost.textContent.includes(filtrirati)
        })
        .forEach((vrijednost) =>{
            vrijednost.classList.remove("filtrirano")
        })
}

addForm.addEventListener("submit", e =>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo !== ""){
        generisanje_templajta(todo);
        addForm.add.value = ""; // moze isto addFarm.reset();
    }else {
        addForm.add.value = "";
    }
})

// Za brisanje liste
list.addEventListener("click", e => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});

// Za trazenje odredene liste
search.addEventListener("keyup", () => {
    const vrijednost = search.value.trim();
    filtriranje(vrijednost);
});

