const card = document.querySelectorAll(".card")
const svg = document.querySelectorAll(".card > svg")
const img = document.querySelectorAll(".card > img")

const loadImage = () => {
  fetch("http://www.splashbase.co/api/v1/images/search?query=dog", {})
    .then((response) => response.json())
    .then((pictures) => {
      console.log(pictures.images[0].url)

      // console.log(card)
      for (let i = 0; i < card.length; i++) {
        svg[i].remove()
        // img[i].remove()

        const imgTag = document.createElement("img")
        imgTag.classList.add("card-img-top")
        imgTag.src = pictures.images[i].url
        card[i].prepend(imgTag)
      }
      console.log(svg)
    })

    .catch((err) => {
      console.error(err)
    })
}

const loadSecondaryImage = () => {
  fetch("http://www.splashbase.co/api/v1/images/search?query=dog", {})
    .then((response) => response.json())
    .then((pictures) => {
      console.log(pictures.images[1].url)

      for (let i = 0; i < card.length; i++) {
        svg[i].remove()

        const imgTag = document.createElement("img")
        imgTag.classList.add("card-img-top")
        imgTag.src = pictures.images[1].url
        card[i].prepend(imgTag)
      }
      console.log(svg)
    })

    .catch((err) => {
      console.error(err)
    })
}

const hideCard = function (e) {
  let parent =
    e.currentTarget.parentElement.parentElement.parentElement.parentElement
  parent.classList.add("d-none")
}

window.onload = function () {
  const editBtn = document.querySelectorAll("main div > button:nth-child(2)")

  editBtn.forEach((element) => {
    element.innerText = "HIDE"
    element.addEventListener("click", hideCard)
  })
}

const nineMin = document.querySelector(".card-body small")
nineMin.innerText = pictures.images.id
