function closeme(){
    x= document.getElementById("007");
    x.className="close";    
}

function openme(){
    x=document.getElementById("007");
    x.className = "open";
}

var ame = prompt("What is your name")
if (ame.length!=0) {
    document.write("Hello"+ ame);
}
else{
    document.write("Give me your name SOB.");
}
