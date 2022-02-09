// Set a intial count
let count =  0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn"); 

btns.forEach(function (btn) {
    btn.addEventListener('click',function (event) {
        const styles = event.currentTarget.classList;
        counter(styles);
        value.textContent =  count ;
        value.style.color =   countercolor(count)
    })
});

//  Increase the count.
function counter(styles) {
    if (styles.contains('decrease')) {
        return count--;            
    }
    else if(styles.contains('increase')){
        return count++;
    }
    else{
        return count = 0;
    }
}

// Change the counter color.
function countercolor(count) {
    if (count > 0) {
        return "green";
    }

    else if(count < 0){
        return "red";
    }

    else{
        return "blue"
    }
}