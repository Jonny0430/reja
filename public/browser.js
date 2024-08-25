// const axios = require("axios");

//const { default: axios } = require("axios");

console.log("FrontEnd JS ishga tushdi");



function itemTemplate(item) {      //item
    return  `<li
            class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
                >
                <span class="item-text">${item.reja}</span>
                <div>
                    <button data-id="${item._id}" 
                    class="edit-me btn btn-secondary btn-sm mr-2">
                        O'zgartrish
                    </button>
                    <button
                    data-id="${item._id}"
                  class="delete-me btn btn-danger btn-sm">
                  O'chrish</button>
                </div>
            </li>`;
}

let createField = document.getElementById("create-field");
document.getElementById("create-form").addEventListener("submit", (e) => {
    e.preventDefault();  //function

    axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
        document.getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
    createField.value = "";
    createField.focus();
    }) 
    .catch((err) => {
        console.log("Iltimos qaytadan harakat qiling!");
    });
});

document.addEventListener("click",  (e) => {
    // console.log(e.target);  //function
    //delet oper
    if (e.target.classList.contains("delete-me")) {
        if (confirm("Aniq ochirmoqchimisiz?")) {
        // alert("Yes deb javob berildi");
        // } else {
        //     alert("No deb javob berildi");
        axios
        .post("/delete-item", { id: e.target.getAttribute("data-id")})
        .then((response) => {
            console.log(response.data);
            e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
            console.log("Iltimos qaytadan harakat qiling!");
        });
        }
    }
    //edit oper
    if (e.target.classList.contains("edit-me")) {
     //alert("siz edit tugmasini bosdingi");
     let userInput = prompt("O'zgartirish kiriting", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
     if (userInput) {
        //console.log(userInput);
        axios.post("/edit-item", {
            id: e.target.getAttribute("data-id"),
            new_input: userInput,
        }).then(response => {
            console.log(response.data);
            e.target.parentElement.parentElement.querySelector(
                ".item-text"
            ).innerHTML = userInput;
        })
        .catch((err) => {
            console.log("Iltimos qaytadan harakat qiling!");
        });
     }   
    }
});

document.getElementById("clean-all").addEventListener("click",  () => {
    axios.post("/delete-all", { delete_all: true }).then((respose) => {
        alert(respose.data.state);
        document.location.reload();
    });
});