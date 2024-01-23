import {sendRequest} from './send-request';
const BASE_URL = '/api/items';

export function getAll() {
  return sendRequest(`${BASE_URL}/index`);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function loadUp(itemData) {
  return sendRequest(BASE_URL, "POST", itemData)
}