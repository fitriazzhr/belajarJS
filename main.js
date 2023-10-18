// console.log("Hello World")
// alert("Ada Notifikasi")
// prompt("Pinjam Dulu Seratus")

// var Promnet = "Coding is Easy"
// console.log(Promnet)
// var Promnet = "Coding is Easy"
// console.log(Promnet)

// console.log(Promnet)
// var Promnet = "Nothing is possible"
// console.log(Promnet)

// let Promnet = "Coding is fun"
// console.log(Promnet)
// let Promnet = "Coding is fun"
// console.log(Promnet)

// const Promnet = "Coding is my life"
// console.log(Promnet)
// const Promnet = "Coding is not my life"
// console.log(Promnet)

// let totalPoin = prompt("Masukkan Poin Anda")
//     if(totalPoin >= 100){
//         document.write("Congratulation");
//         }else{
//             document.write("Keep Trying");
//     }

// let x = 6
// let y = 3

    // if (x<10 && y>1) {
    //     document.write("True");
    // } else {
    //     document.write("False");
    // }

    // if (x<10 && y<1) {
    //     document.write("True");
    // } else {
    //     document.write("False");
    // }

    // if (x==5||y==5) {
    //     document.write("True");
    // } else {
    //     document.write("False");
    // }

    // if (x==6||y==5) {
    //     document.write("True");
    // } else {
    //     document.write("False");
    // }

    // if (!(x==y)) {
    //     document.write("True");
    // } else {
    //     document.write("False");
    // }

// console.log(x<10 && y>1);
// console.log(x<10 && y<1);
// console.log(x==5||y==5);
// console.log(x==6||y==5);
// console.log(!(x==y));

// document.write(x<10 && y>1);
// document.write("<br>");
// document.write(x<10 && y<1);
// document.write(x==5||y==5);
// document.write(x==6||y==5);
// document.write(!(x==y));

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")
// button.addEventListener('click', function(){
    // let isi = input.value
    // console.log(isi)
    // p.innerHTML = isi
// })

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Kamu harus mengetik sesuatu!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
