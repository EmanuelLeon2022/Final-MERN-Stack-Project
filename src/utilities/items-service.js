import * as itemsAPI from './items-api'

export async function loadUp(itemData) {
    const tebu = await itemsAPI.loadUp(itemData);
    localStorage.setItem("tebu", tebu);
    return tebu;
  }