import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawHouses() {
  const houses = AppState.houses
  let template = ''
  console.log('app state houses', houses)
  houses.forEach(house => template += house.cardTemplate)
  setHTML('housesList', template)
}

export class HousesController {
  constructor() {
    this.getHouses()

    AppState.on('houses', _drawHouses)
  }

  drawEditForm(houseId) {
    const foundHouse = AppState.houses.find(h => h.id == houseId)

    setHTML('house-form', foundHouse.EditForm)
  }

  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }

  async deleteHouse(houseId) {
    console.log('button clicked', houseId)
    try {

      const wantsToDelete = await Pop.confirm('Are you sure you want to delete this car?')

      if (!wantsToDelete) {
        return
      }

      await housesService.deleteHouse(houseId)
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }

  async editHouse(event, houseId) {
    console.log('clicked in controller')
    event.preventDefault()
    try {
      const form = event.target
      const houseData = getFormData(form)
      await housesService.editHouses(houseData, houseId)
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }

  }

  async createHouse(event) {
    try {
      event.preventDefault()
      const form = event.target
      const houseData = getFormData(form)
      console.log(houseData)
      await housesService.createHouse(houseData)
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }
}
