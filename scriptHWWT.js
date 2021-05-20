const showModal = (e) => {
  //this line is targeting the image and storing it in url
  const url = e.target.closest(".card").children[0].src

  const modalBody = document.querySelector(".modal-body")
  modalBody
}

const renderData = (data) => {
  //grabbing the parent row then cleaning it up setting it to empty ""
  const parent = document.querySelector(".album .row")
  // const img = `<img src="${img.url}"/>`
  // modalBody.innerHTML = img

  // for each image, generate a card
  data.forEach((img) => {
    const card = `
    <div class="col-md-4">
              <div id="card1" class="card mb-4 shadow-sm">
                  <img src="${img.url}"/>
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                <div class="card-body">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        onclick = "showModal(event)"
                        // data-toggle="modal" 
                        // data-target="#exampleModal"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">"${img.id}"</small>
                  </div>
                </div>
              </div>
            </div>
    `
    parent.innerHTML += card
  })
}

const searchImages = (query) => {
  fetch(`http://www.splashbase.co/api/v1/images/search?query=${query}`)
    .then((response) => response.json())
    .then((data) => {
      renderData(data.images)
    })
    .catch((err) => console.log(err))
}
searchImages("people")

//load-img load-sec-img
window.onload = () => {
  //Grabbing the buttons
  const primaryBtn = document.getElementById("load-img")
  const secondaryBtn = document.getElementById("load-sec-img")

  //adding event listener to the 1st btn
  primaryBtn.addEventListener("click", () => searchImages("sea"))
  //adding event listener to the 2nd btn
  secondaryBtn.addEventListener("click", () => searchImages("people"))
}
