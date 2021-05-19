const card = document.querySelectorAll(".card")
const svg = document.querySelectorAll(".card > svg")
const img = document.querySelectorAll(".card > img")

const loadImage = () => {
  fetch("http://www.splashbase.co/api/v1/images/search?query=dog", {
    // method: "GET",
    // headers: {
    //   "x-rapidapi-key": "c1fd8eb80bmsh31fad838004364fp18f820jsn1e2bc6355511",
    //   "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    // },
  })
    .then((response) => response.json())
    .then((pictures) => {
      console.log(pictures.images[0].url)

      // console.log(card)
      for (let i = 0; i < card.length; i++) {
        svg[i].remove()
        // img[i].remove()

        const imgTag = document.createElement("img")
        imgTag.classList.add("card-img-top")
        imgTag.src = pictures.images[0].url
        card[i].prepend(imgTag)
      }
      console.log(svg)
      // const list = document.getElementById("ingridList")
      // for (let i = 0; i < songs.data.length; i++) {
      //   const listElement = document.createElement("li")
      //   listElement.className = "list-group-item"
      //   listElement.innerText = `${songs.data[i].title}`
      //   listElement.innerHTML = `${songs.data[i].md5_image}`
      //   list.appendChild(listElement)
      // }
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

      // console.log(card)
      for (let i = 0; i < card.length; i++) {
        svg[i].remove()
        // img[i].remove()

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
  console.log(e.currentTarget.parentElement)
}

window.onload = function () {
  const editBtn = document.querySelectorAll("main div > button:nth-child(2)")

  editBtn.forEach((element) => {
    element.innerText = "HIDE"
    element.addEventListener("click", hideCard)
  })
}
// card[0].classList.add("d-none")
