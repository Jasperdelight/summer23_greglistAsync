import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"

class HousesService {

  async getHouses() {
    const res = await api.get('api/houses')
    console.log('houses?', res.data)
    const builtHouses = res.data.map(h => new House(h))
    AppState.houses = builtHouses

  }

  async editHouse(houseId, houseData) {
    const res = await api.put(`api/houses/${houseId}`, houseData)
    const updateHouse = new House(res.data)
    const oldHouseIndex = Appstate.houses.findIndex(h => h.id == houseId)

    if (oldHouseIndex == -1) {
      throw new Error(`No car index found with the id of ${carId}`)
    }
    AppState.houses.splice(oldHouseIndex, 1, updateHouse)
    AppState.emit('houses')
  }

  async deleteHouse(houseId) {
    console.log('house id in service', houseId)
    const res = await api.delete(`api/houses/${houseId}`)
    const houseIndex = AppState.houses.findIndex(house => house.id == houseId)
    if (houseIndex < 0) {
      throw new Error('no car found')
    }
    AppState.houses.splice(houseIndex, 1)
    AppState.emit('houses')
  }

  async createHouse(houseData) {
    console.log('created house data', houseData)
    const res = await api.post('api/houses', houseData)
    const builtHouse = new House(res.data)
    console.log(builtHouse)
    AppState.houses.push(builtHouse)
    AppState.emit('houses')
  }
}

export const housesService = new HousesService()
