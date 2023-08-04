
let home_button = document.getElementById("home_button")
let about_me_button = document.getElementById("about_me_button")
let body = document.querySelector("body")
let home_page = document.getElementById("home_description")
let about_me_page = document.getElementById("about_me_description")
var price = new Audio('small_fish.mp3')
var boy = new Audio('LonelyBoy.mp3')




about_me_button.onclick = function() {

    boy.pause()
    body.style.backgroundImage =  "url(korosensei-2.jfif)"
    home_page.style.display = "none"
    about_me_page.style.display = "flex"
    price.play();
}


home_button.onclick = function() {
    
    price.pause()
    body.style.backgroundImage =  "url(Self-Image.jpg)"
    home_page.style.display = "flex"
    about_me_page.style.display = "none"
    boy.play()
}







