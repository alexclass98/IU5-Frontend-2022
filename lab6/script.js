const { response } = require("express");

const button = document.getElementById("kvadrat");

const handleButtonClick = (e) => {
    r = Math.floor(Math.random() * (256)),
    g = Math.floor(Math.random() * (256)),
    b = Math.floor(Math.random() * (256)),
    color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

    button.style.background = color;
};

button.addEventListener("click", handleButtonClick);




const div = document.getElementById("kvadrat2");
let time = 0;
div.addEventListener("mouseenter", () => {
    speed = setInterval(() => {
      time++;
      div.innerHTML = `${time}`;
    }, 300);
});

div.addEventListener("mouseleave", () => {
    clearInterval(speed);
});



const show1 = document.getElementById("spisok");
const show2 = document.getElementById("task3");
show1.addEventListener("click", () => {
    show2.classList.toggle("spisok-flex");
}
);



const el1 = document.getElementById("task4");
const el2 = document.getElementById("d1");
let Clicker = false;
el2.addEventListener("click", () =>{
    Clicker = true;
} );
el1.addEventListener('mousemove', e => {
    if (Clicker) {
        let x = e.pageX - el1.offsetLeft;
        let y = e.pageY - el1.offsetTop;

        if (x < el1.offsetWidth - el2.offsetWidth - 10 && y < el1.offsetHeight - el2.offsetHeight - 10) {
            el2.style.left = x + "px";
            el2.style.top = y + "px";
        }
    }
});




const serial = document.getElementById("serial")
const last = document.getElementById("hid")
let res=[];
serial.addEventListener("click", ()=>{
    let taken = fetch("https://breakingbadapi.com/api/episodes")
    .then((response)=>{
        return response.json();
    })
    .then((data) => {
        for (let i of data) {
            res.push(i.series);
        }
})
res.forEach((e) => {
    last.innerHTML += `<h1>${e}</h1>`;
});
});







