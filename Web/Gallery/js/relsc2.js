function displayaltText(element){
    document.querySelector('#message').style.backgroundImage = "url('"+element.src+"')";
    document.getElementById('message').innerHTML=element.alt;
}

function displaydefault(){
    document.querySelector('#message').style.backgroundImage = "url('')";
    document.getElementById('message').innerHTML='Hover over again';
}