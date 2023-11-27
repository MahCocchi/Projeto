function toggleMode() {
let html = document.getElementById("light")
html.classList.toggle("light")

const img = document.querySelector("#profile img")
if (html.classList.contains("ligth")) {
  img.setAttribute("scr", "./assets/avatar-ligth.png")  
} else {
  img.setAttribute("scr", "./assets/avatar.png")
  }
}
