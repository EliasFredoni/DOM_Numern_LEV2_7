
//let rechteck = document.getElementsByClassName("rechteck");
//let weiss = document.getElementsByClassName("weiss");

let umwickeln = document.querySelector(".umwickeln");
let button = document.querySelector("button")


let counter = 0;


button.addEventListener("click", () => {
    let div = document.createElement("div");
    div.textContent = counter;
    console.log(div);
    umwickeln.appendChild(div);
    if (counter % 10 == 0) {
        div.classList.add("weiss");
    } else {
        div.classList.add("rechteck");
    }
    counter++;
});





