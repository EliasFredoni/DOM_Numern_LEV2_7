
//let rechteck = document.getElementsByClassName("rechteck");
//let weiss = document.getElementsByClassName("weiss");

let umwickeln = document.getElementsByClassName("umwickeln")
let weiss = document.createElement("weiss");
let rechteck = document.createElement("rechteck");
let div = document.querySelector("div");
console.log(div)
console.log(rechteck)
let counter = 0;


document.body.addEventListener("click", (e) => {
    div.classList.add("rechteck");
    div.classList.add("weiss")
    //div.appendChild(weiss);
    //div.appendChild(rechteck);
    div.textContent = counter;
    if (counter == 0 || counter % 10 == 0) {
        weiss.classList.add("weiss")
        console.log("hi");
    } else {
        div.classList.add("rechteck")
    }
    counter++;
})





