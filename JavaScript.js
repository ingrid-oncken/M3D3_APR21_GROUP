const popUpModel = (e) => {
    const imgUrl = e.currentTarget.closest('.card').children[0].src
    const modalBody = document.querySelector('.modal-body')
    const img = `<img src="${imgUrl}" alt="" style="width: 100%; object-fit:cover;">`
    modalBody.innerHTML = img
}

const removeCard = (e) => {
    const card = e.currentTarget.closest('.col-md-4')
    card.remove()
}
const render = (imgArr) => {
    const album = document.querySelector('.album .row')
    album.innerHTML = ''
    imgArr.forEach(img => {
        const card = ` <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img src="${img.large_url}" alt="">
          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  data-toggle="modal" data-target="#exampleModal"
                  onclick="popUpModel(event)"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  onclick="removeCard(event)"
                >
                  Hide
                </button>
              </div>
              <small class="text-muted">${img.id}</small>
            </div>
          </div>
        </div>
      </div>`
      album.innerHTML += card
    });
}
const getImages = (theme) => {
    fetch(`http://www.splashbase.co/api/v1/images/search?query=${theme}`)

    .then((response) => response.json())
    .then((imgData) => render(imgData.images))

    .catch((err) => console.error(err));
}

window.onload = () => {
    const loadBtn = document.getElementById('loadBtn')
    const loadSecondBtn = document.getElementById('loadSecondBtn')
    loadBtn.addEventListener('click', () => {
        getImages('beach')
    })
    loadSecondBtn.addEventListener('click', () => {
        getImages('sea')
    })
}