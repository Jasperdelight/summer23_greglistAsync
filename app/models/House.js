import { AppState } from "../AppState.js"

export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = data.creator
  }

  get EditForm() {
    return `
    <section class="row">
  <div class="col-12">
    <form onsubmit="app.HousesController.editHouse(event, ${this.id})">

      <label for="price">Price:</label><br>
      <input type="text" id="price" name="price" value="${this.price}"><br>

      <label for="description">description:</label><br>
      <input type="text" id="description" name="description" value="banana"><br>

      <label for="bedrooms">Bedrooms:</label><br>
      <input type="number" id="bedrooms" name="bedrooms" value="">
      
      <label for="bathrooms">Bathrooms:</label><br>
      <input type="number" id="bathrooms" name="bathrooms" value="">
      
      <label for="floors">floors:</label><br>
      <input type="number" id="floors" name="floors" value="">
      
      <label for="levels">levels:</label><br>
      <input type="number" id="levels" name="levels" value="">
      
      <label for="year">Year:</label><br>
      <input type="number" id="year" name="year" value="">
      
      
      <br><br>


      <input type="submit" value="Edit">
    </form>
  </div>
</section>
    `
  }

  get cardTemplate() {
    return `
    <div class="col-10 m-auto mb-3">
    <section class="row bg-light elevation-5 "">
      <div class="col-12 col-md-4 p-0">
        <img class="img-fluid"
          src="${this.imgUrl}"
          alt="House">
          </div>
          <div class="col-12 col-md-8 p-3">
          <h2>${this.bedrooms} ${this.bathrooms} ${this.levels}</h2>
          <h3>$${this.price}</h3>
          <p>${this.description}</p>
          <h4>${this.createdAt.toLocaleString()}</h4>
          <div class="d-flex align-items-center mb-3">
            <h5 class="me-3">${this.creator.name}</h5>
            <img class="img-fluid creator-picture"
              src="${this.creator.picture}"
              alt="${this.creator.name}">
          </div>
          <button onclick="app.HousesController.deleteHouse('${this.id}')" class="btn btn-danger">Delete House</button>
          <button onclick="app.HousesController.drawEditForm('${this.id}')" class="btn btn-success">Edit House</button>
          </div>
    </section>
  </div>
    `
  }
  get ComputeDeleteButton() {
    if (!AppState.account || AppState.account.id != this.creatorId) {
      return ''
    }
    return `<button onclick="app.HousesController.deleteHouse('${this.id}')" class="btn btn-danger">Delete Car</button>`
  }



  //   get houseTemplate = `
  //   {
  //     "_id": "6467038ad716b57062d02152",
  //     "bedrooms": 12,
  //     "bathrooms": 12,
  //     "levels": 3,
  //     "year": 345,
  //     "price": 12345,
  //     "description": "this is anice house with a good neighoor around ",
  //     "creatorId": "6463ede3a495a7cd97ee9f3f",
  //     "createdAt": "2023-05-19T05:05:14.453Z",
  //     "updatedAt": "2023-05-19T05:05:14.453Z",
  //     "__v": 0,
  //     "creator": {
  //         "_id": "6463ede3a495a7cd97ee9f3f",
  //         "name": "BadBoy🧌",
  //         "picture": "https://i.pinimg.com/736x/86/10/60/86106086e9594672ad7408913b5a3a24.jpg",
  //         "id": "6463ede3a495a7cd97ee9f3f"
  //     },
  //     "id": "6467038ad716b57062d02152"
  // }
  //   `
}
