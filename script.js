let time = 3000,
  currentImageIndex = 0,
  image = document.querySelectorAll('section img'),

  max = image.length;

function nextImage() {


}

function start() {
  setInterval(() => {
    image[currentImageIndex].classList.remove("personagens")

    currentImageIndex++

    if (currentImageIndex >= max) {
      currentImageIndex = 0
    }

    image[currentImageIndex].classList.add("personagens")
  }, time);


  let characters = ["Gogeta",
    "Freeza",
    "Gohan",
    "Goku",
    "Majin Boo",
    "Piccolo",
    "Vegetta",
    "Vegetto"]

  let indice = 0

  function exibirNome() {
    document.querySelector("h2").innerHTML = characters[indice];

    indice = (indice + 1) % characters.length;

  }

  exibirNome()

  setInterval(exibirNome, 3000)

}
window.addEventListener("load", start)
