const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const hex_btn = document.getElementById("btn");
const hex_color = document.querySelector(".color")

hex_btn.addEventListener('click',function(){
    let hexcolor  = "#";
    for (let index = 0; index < 6; index++) {
        hexcolor+=hex[getRandomNumberforhex()];        
    }
    document.body.style.backgroundColor = hexcolor;
    hex_color.textContent = hexcolor;
})

function  getRandomNumberforhex(){
    return Math.floor(Math.random()*hex.length);
}

